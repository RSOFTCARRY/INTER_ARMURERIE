'use client'


import { signIn } from "@/api/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import * as z from "zod"

const loginSchema = z.object({
  email: z.string().email("Ce n'est pas un mail valide"),
  password: z.string()
})

export default function Login() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "fatima.elmouhine@laplateforme.io",
      password: "Atelier123"

    }
  })

  const loginMutation = useMutation({
    mutationFn: async (newTodo) => {
      return await signIn(newTodo)
    },
    onSuccess: (data, variables, context) => {
      console.log("data", data)
      localStorage.setItem("accessToken", data.data.token.accessToken)
      localStorage.setItem("refreshToken", data.data.token.refreshToken)
      window.location = "/"

    },

  })

  const onSubmit = (data) => {
    loginMutation.mutate(data)
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Connexion</CardTitle>
          <CardDescription>Entrer votre identifiant</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Entrer votre e-mail"
                {...register("email")}
                required
              />

              {}
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Mot de passe
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Entrer votre mot de passe"
                {...register("password")}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Connexion
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

