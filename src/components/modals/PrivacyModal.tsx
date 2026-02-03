"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Shield } from "lucide-react";

interface PrivacyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PrivacyModal({ open, onOpenChange }: PrivacyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <DialogTitle className="text-2xl">Privacy & Security</DialogTitle>
          </div>
          <DialogDescription>
            Last updated: [DATE]
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              Our Commitment to Your Privacy
            </h3>
            <p>
              We understand that your privacy and the security of your personal
              information are of utmost importance. This Privacy and Security
              Policy explains how we collect, use, protect, and share
              information when you visit our website or use our services.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              Information We Collect
            </h3>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Personal identification information (name, email address, phone
                number, mailing address)
              </li>
              <li>
                Financial information necessary for loan processing (income,
                employment, credit history)
              </li>
              <li>
                Website usage data (IP address, browser type, pages visited)
              </li>
              <li>
                Information provided through forms, surveys, or correspondence
              </li>
            </ul>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              How We Use Your Information
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>To process and evaluate loan applications</li>
              <li>To communicate with you about our products and services</li>
              <li>To improve our website and customer experience</li>
              <li>To comply with legal and regulatory requirements</li>
              <li>To prevent fraud and protect our business interests</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              Information Security
            </h3>
            <p>
              We implement industry-standard security measures to protect your
              personal information, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure servers and firewalls</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Employee training on data protection practices</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              Information Sharing
            </h3>
            <p>
              We do not sell your personal information. We may share information
              with:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>
                Service providers who assist us in conducting our business
              </li>
              <li>
                Lenders and financial institutions for loan processing
              </li>
              <li>
                Government agencies as required by law or regulation
              </li>
              <li>
                Third parties with your consent or as permitted by law
              </li>
            </ul>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              Cookies and Tracking Technologies
            </h3>
            <p>
              We use cookies and similar technologies to enhance your browsing
              experience, analyze website traffic, and understand user behavior.
              You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              Your Rights
            </h3>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt out of marketing communications</li>
              <li>File a complaint with regulatory authorities</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              Contact Us
            </h3>
            <p>
              If you have questions about this Privacy and Security Policy or
              wish to exercise your privacy rights, please contact us at:
            </p>
            <div className="mt-3 p-4 bg-muted/50 rounded-lg">
              <p className="font-medium text-foreground">
                OpenBroker
              </p>
              <p>[Add]</p>
              <p>CA</p>
              <p>Email: sales@qualr.com</p>
              <p>Phone: [Call]</p>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
