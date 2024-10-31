import ClientHeader from "@/app/components/headers/ClientHeader"
import GradientBackground from "@/app/components/backgrounds/GradientBackground"

export default function MainContainer({ children }) {
    return (
        <div className="relative w-full">
            <GradientBackground className="absolute z-0" /> 
            <ClientHeader/>
            <div className="relative z-10">{children}</div>
        </div>
    )
}
