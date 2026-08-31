import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { AppLayout } from "../../app/layout/AppLayout";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <AppLayout>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Contact us
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
            Have a question or feedback? Send us a message and our team will get
            back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800 dark:bg-stone-950 rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold">Contact information</h3>
            <p className="mt-3 text-slate-300 text-sm leading-6">
              Use the details below for general questions about the Employee
              Portal.
            </p>

            <div className="mt-8 space-y-6">
              <ContactItem
                icon={Mail}
                label="Email"
                value="support@employeeportal.com"
              />
              <ContactItem icon={Phone} label="Phone" value="+91 98765 43210" />
              <ContactItem icon={MapPin} label="Office" value="India" />
            </div>
          </div>

          <div className="lg:col-span-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
            {submitted && (
              <div className="mb-5 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 text-sm text-green-700 dark:text-green-300">
                Your message has been submitted successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField label="Your name" id="name" required />
                <FormField
                  label="Email address"
                  id="email"
                  type="email"
                  required
                />
              </div>

              <FormField label="Subject" id="subject" required />

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Write your message..."
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-slate-400"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-black hover:bg-black dark:hover:bg-white transition-colors font-medium"
              >
                <Send className="w-4 h-4" />
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

function ContactItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-5 h-5 mt-0.5 text-slate-300" />
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-sm text-white break-all">{value}</p>
      </div>
    </div>
  );
}

function FormField({ label, id, type = "text", required = false }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-slate-400"
      />
    </div>
  );
}
