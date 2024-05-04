"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { ReactNode, useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { ThemeSwitcher } from "./ui/theme-switcher";

const formSchema = z.object({
    username: z.string().min(2, "Mindestens 2 Zeichen benötigt.").max(50, "Maximal 50 Zeichen erlaubt."),
});

export const Test: React.FC<{ children?: ReactNode; className?: string }> = ({ children, className }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    });

    const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
        console.log(values);
    }, []);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <ThemeSwitcher />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};
