import { cn } from "@/lib/utils";
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

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-[#4664B2]">
            Connectez-vous à votre compte
          </CardTitle>
          <CardDescription>
            Saisissez votre adresse e-mail ci-dessous pour vous connecter à
            votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
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
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password" className="text-[#4664B2]">
                    Mot de passe
                  </FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm text-[#4664B2] underline-offset-4 hover:underline"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit" className="bg-[#4664B2]">
                  Se connecter
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  className="text-[#4664B2]"
                >
                  Se connecter avec Google
                </Button>
                <FieldDescription className="text-center">
                  Vous n'avez pas de compte ?{" "}
                  <a href="/signup" className="text-[#4664B2]">
                    S'inscrire
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
