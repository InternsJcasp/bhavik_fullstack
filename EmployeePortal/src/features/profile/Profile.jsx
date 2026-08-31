import {
  Mail,
  MapPin,
  BriefcaseBusiness,
  ShieldCheck,
  CalendarDays,
  Edit3,
} from "lucide-react";
import { AppLayout } from "../../app/layout/AppLayout";

export function Profile() {
  return (
    <AppLayout>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-slate-800 dark:bg-stone-950 rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-24 h-24 rounded-full bg-black border-4 border-slate-400 flex items-center justify-center text-4xl font-bold">
              B
            </div>

            <div className="text-center sm:text-left flex-1">
              <p className="text-sm text-slate-300">Administrator profile</p>
              <h2 className="mt-1 text-3xl font-bold">Bhavik Sharma</h2>
              <p className="mt-2 text-slate-300">
                Portal Administrator · Employee Portal
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-800 hover:bg-slate-200 transition-colors text-sm font-medium"
            >
              <Edit3 className="w-4 h-4" />
              Edit Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Personal information
            </h3>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InfoItem
                icon={Mail}
                label="Email"
                value="bhavik.sharma@company.com"
              />
              <InfoItem
                icon={BriefcaseBusiness}
                label="Role"
                value="Administrator"
              />
              <InfoItem icon={MapPin} label="Location" value="India" />
              <InfoItem
                icon={CalendarDays}
                label="Joined"
                value="January 2026"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  Account status
                </h3>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Active
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-gray-500 dark:text-gray-400">
                  Access level
                </span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  Full access
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500 dark:text-gray-400">
                  Department
                </span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  Engineering
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500 dark:text-gray-400">
                  Last login
                </span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  Today
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            About this profile
          </h3>
          <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
            This profile belongs to the administrator responsible for managing
            and exploring employee information in the Employee Portal.
          </p>
        </div>
      </section>
    </AppLayout>
  );
}

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5" />
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
          {label}
        </p>
        <p className="mt-1 text-gray-900 dark:text-gray-100 font-medium break-all">
          {value}
        </p>
      </div>
    </div>
  );
}
