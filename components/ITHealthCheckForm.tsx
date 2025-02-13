import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

export const ITHealthCheckForm: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    onClose();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-auto">
      <div className="sticky top-0 z-[60] bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-4 sm:p-6 flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Get a Free IT Health Check
        </h2>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </div>
      <div className="max-h-[calc(100vh-2rem)] overflow-y-auto">
        <form onSubmit={handleSubmit} className="px-4 py-6 sm:p-6 space-y-6">
          <p className="text-gray-600 text-sm sm:text-base">
            Let our experts evaluate your current IT setup to identify potential
            risks, improve performance, and ensure security.
          </p>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="fullName"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  required
                  className="w-full h-11"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="We'll use this to contact you"
                  required
                  className="w-full h-11"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number (Optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="If you prefer a call"
                  className="w-full h-11"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="company"
                  className="text-sm font-medium text-gray-700"
                >
                  Company Name
                </Label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  required
                  className="w-full h-11"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="industry"
                  className="text-sm font-medium text-gray-700"
                >
                  Industry
                </Label>
                <Select>
                  <SelectTrigger id="industry" className="w-full h-11">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="devices"
                  className="text-sm font-medium text-gray-700"
                >
                  Number of Devices/Employees
                </Label>
                <Input
                  id="devices"
                  placeholder="Size of your operation"
                  required
                  className="w-full h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="challenges"
                className="text-sm font-medium text-gray-700"
              >
                Current IT Challenges or Concerns
              </Label>
              <Textarea
                id="challenges"
                placeholder="Share any issues or areas you'd like us to focus on"
                className="w-full min-h-[100px] resize-none"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
            >
              Get My Free IT Health Check
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
