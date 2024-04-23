import "./mainLayout.css"

export const MainLayout = ({children, className}) => {
    return (
        <main  className={`${className}`}>
            {children}
        </main>
    )
}