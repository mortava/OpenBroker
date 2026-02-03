"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

interface TermsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TermsModal({ open, onOpenChange }: TermsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Terms of Use</DialogTitle>
          <DialogDescription>
            Last updated: [DATE]
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              1. Acceptance of Terms
            </h3>
            <p>
              By accessing and using this website, you accept and agree to be
              bound by these Terms of Use. If you do not agree to these terms,
              please do not use this website. We reserve the right to modify
              these terms at any time, and your continued use of the site
              constitutes acceptance of any changes.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              2. Use of Website
            </h3>
            <p>
              This website is provided for informational purposes only. The
              content on this site does not constitute an offer to lend, a
              commitment to lend, or an approval for any loan product. All loan
              applications are subject to credit approval, verification, and
              underwriting guidelines.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              3. No Professional Advice
            </h3>
            <p>
              The information provided on this website is general in nature and
              should not be considered as financial, legal, or tax advice. We
              recommend consulting with qualified professionals before making
              any financial decisions. Each individual&apos;s situation is
              unique, and specific advice should be tailored to your
              circumstances.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              4. Accuracy of Information
            </h3>
            <p>
              While we strive to provide accurate and up-to-date information,
              rates, terms, and conditions are subject to change without notice.
              We make no representations or warranties about the accuracy,
              completeness, or suitability of the information contained on this
              website for any purpose.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              5. Third-Party Links
            </h3>
            <p>
              This website may contain links to third-party websites. These
              links are provided for your convenience only. We do not endorse,
              control, or assume responsibility for the content, privacy
              policies, or practices of any third-party websites.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              6. Intellectual Property
            </h3>
            <p>
              All content on this website, including text, graphics, logos, and
              images, is the property of OpenBroker or its
              content suppliers and is protected by copyright and other
              intellectual property laws. Unauthorized use or reproduction is
              prohibited.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              7. Limitation of Liability
            </h3>
            <p>
              To the fullest extent permitted by law, OpenBroker shall not be liable for any direct, indirect,
              incidental, special, consequential, or punitive damages arising
              from your use of or inability to use this website or any
              information provided herein.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              8. Governing Law
            </h3>
            <p>
              These Terms of Use shall be governed by and construed in
              accordance with the laws of the State of CA, without regard
              to its conflict of law provisions. Any disputes arising from these
              terms shall be resolved in the courts of Palm Beach County, CA.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="font-heading font-semibold text-foreground text-base mb-2">
              9. Contact Information
            </h3>
            <p>
              If you have any questions about these Terms of Use, please contact
              us at sales@qualr.com or call [Call].
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
