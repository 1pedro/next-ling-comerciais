import Body from "@/app/body";

export const metadata = {
    title: 'FoodStiks',
    description: 'O melhor delivery da cidade!',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Body>{children}</Body>
        </html>
    )
}
