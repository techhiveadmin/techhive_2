import { useState, useMemo } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { motion } from 'motion/react';
import { toast } from 'sonner';

// libphonenumber imports
import {
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
  AsYouType,
  CountryCode,
} from 'libphonenumber-js';

const WEB3FORMS_ACCESS_KEY = '0f53d131-55a0-4fab-a9e1-68fb94bf3241';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    countryCode: 'LK' as CountryCode,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get full list of countries + calling codes from libphonenumber-js
  const countryOptions = useMemo(() => {
    const countries = getCountries();
    return countries
      .map((code: CountryCode) => ({
        iso: code,
        name: new Intl.DisplayNames(['en'], { type: 'region' }).of(code) || code,
        callingCode: getCountryCallingCode(code),
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((c) => ({
        value: c.iso,
        label: `${c.name} (+${c.callingCode})`,
        callingCode: `+${c.callingCode}`,
      }));
  }, []);

  // Real-time phone formatting
  const formattedPhone = useMemo(() => {
    if (!formData.phone) return '';
    const instance = new AsYouType(formData.countryCode);
    return instance.input(formData.phone);
  }, [formData.phone, formData.countryCode]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    else if (formData.name.trim().length < 2)
      newErrors.name = 'Name must be at least 2 characters';

    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email address';

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    const selectedCountry = countryOptions.find((c) => c.value === formData.countryCode);
    const fullPhone = `${selectedCountry?.callingCode}${formData.phone}`;
    const phoneNumber = parsePhoneNumberFromString(fullPhone, formData.countryCode);

    if (formData.phone && (!phoneNumber?.isPossible() || !phoneNumber?.isValid())) {
      newErrors.phone = 'Please enter a valid phone number for the selected country';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please correct the errors in the form');
      return;
    }

    setIsSubmitting(true);

    const selectedCountry = countryOptions.find((c) => c.value === formData.countryCode);
    const fullPhone = `${selectedCountry?.callingCode}${formData.phone}`;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Contact Message from ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: fullPhone,
          company: formData.company,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          countryCode: 'LK',
        });
        setErrors({});
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setFormData((prev) => ({ ...prev, phone: value }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleCountryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, countryCode: value as CountryCode }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-5 sm:px-10 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-4 border border-amber-200">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your project with elite tech talent?
            Contact us today and let's discuss how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <Card className="p-5 sm:p-6 md:p-7 hover:shadow-lg transition-shadow border-l-4 border-l-amber-500 hover:border-l-amber-600">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-amber-200">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1">Email</h4>
                    <p className="text-sm sm:text-base text-gray-600">
                      <a href="mailto:support@techhive.lk" className="hover:text-amber-600 transition-colors">support@techhive.lk</a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 sm:p-6 md:p-7 hover:shadow-lg transition-shadow border-l-4 border-l-amber-500 hover:border-l-amber-600">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-amber-200">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1">Phone</h4>
                    <p className="text-sm sm:text-base text-gray-600">
                      <a href="tel:+94777395555" className="hover:text-amber-600 transition-colors">+94 77 739 5555</a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 sm:p-6 md:p-7 hover:shadow-lg transition-shadow border-l-4 border-l-amber-500 hover:border-l-amber-600">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-amber-200">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1">Location</h4>
                    <a
                      href="https://www.google.com/maps/place/Rich+Blinds+(Pvt)+Ltd/@6.8977775,79.8735088,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae25a2a9656b34b:0xb113c3ebc0b85c89!8m2!3d6.8977722!4d79.8760837!16s%2Fg%2F11c7t44fm2?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm sm:text-base text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      <p>521/12 Thimbirigasyaya Rd,</p>
                      <p>Colombo 00500, Sri Lanka</p>
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-5 sm:p-6 border-2 border-amber-200">
              <h4 className="font-bold text-base sm:text-lg mb-2">Business Hours</h4>
              <div className="space-y-1 text-sm sm:text-base text-gray-600">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <Card className="p-6 sm:p-8 md:p-10 border-2 border-amber-100 h-full shadow-xl rounded-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="focus-visible:ring-amber-400"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-4 w-4" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="focus-visible:ring-amber-400"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-4 w-4" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="focus-visible:ring-amber-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="flex gap-2">
                      <Select
                        value={formData.countryCode}
                        onValueChange={handleCountryChange}
                      >
                        <SelectTrigger className="w-[140px] flex-shrink-0">
                          <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                          {countryOptions.map((country) => (
                            <SelectItem key={country.value} value={country.value}>
                              {country.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formattedPhone}
                        onChange={handlePhoneChange}
                        placeholder={new AsYouType(formData.countryCode).getTemplate() || 'Phone number'}
                        maxLength={18}
                        className="focus-visible:ring-amber-400"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-4 w-4" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="focus-visible:ring-amber-400"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="h-4 w-4" /> {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-400 hover:bg-amber-500 text-black shadow-lg shadow-amber-200"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6 border-2 border-amber-200"
                  >
                    <CheckCircle className="w-10 h-10 text-amber-600" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-3">Thank You!</h3>
                  <p className="text-xl text-gray-600 mb-8">
                    Your message has been sent successfully. We'll get back to you soon!
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-amber-200 hover:bg-amber-50"
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}