import Navbar from '../components/Navbar';
import Intro from "@/components/Intro"
import Footer from '../components/Footer';
import HowToInstallShadcn from '@/components/How-To-Install-Shadcn';
import KeyFeatures from '@/components/Key-Feaures';
import Features from '@/components/Features';

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Intro/>
            <Features/>
            <KeyFeatures/>
            <HowToInstallShadcn/>
            <Footer/>
        </div>
    );
}
