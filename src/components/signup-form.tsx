import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="text-[#4664B2]">Créer un compte</CardTitle>
        <CardDescription>
          Saisissez vos informations ci-dessous pour créer votre compte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name" className="text-[#4664B2]">
                Nom et prénom
              </FieldLabel>
              <Input id="name" type="text" placeholder="Jean Nze" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email" className="text-[#4664B2]">
                Email
              </FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              {/* <FieldDescription>
                Nous utiliserons ces informations pour vous contacter. Nous ne
                partagerons votre adresse e-mail avec personne d'autre.
              </FieldDescription> */}
            </Field>
            <Field>
              <FieldLabel htmlFor="password" className="text-[#4664B2]">
                Mot de passe
              </FieldLabel>
              <Input id="password" type="password" required />
              <FieldDescription>
                Doit comporter au moins 8 caractères.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password" className="text-[#4664B2]">
                Confirmez le mot de passe
              </FieldLabel>
              <Input id="confirm-password" type="password" required />
              <FieldDescription>
                Veuillez confirmer votre mot de passe.
              </FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit" className="bg-[#4664B2]">
                  Créer un compte
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="text-[#4664B2]"
                >
                  Inscrivez-vous avec Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Vous avez déjà un compte ?{" "}
                  <a href="/login" className="text-[#4664B2]">
                    Se connecter
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
