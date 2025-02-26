import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ProductOverview from "../components/ProductOverview/ProductOverview";
import Banner3 from "../components/Banner3/Banner3";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Testimonial from "../components/WhyChoose/Testimonial";
import HowWork from "../components/HowWork/HowWork";
import ComparisonSection from "../components/RealResult/ComparisonSection";
import CustomerFeedback from "../components/CustomerFeedback/CustomerFeedback";
import BackedScience from "../components/BackedScience/BackedScience";
import QuestionAnswer from "../components/QuestionAnswer/QuestionAnswer";
import OrderNow from "../components/OrderNow/OrderNow";
import PricingPlans from "../components/PricePlan/PricingPlans";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <ProductOverview></ProductOverview>
            <Banner3></Banner3>
            <WhyChoose></WhyChoose>
            <Testimonial></Testimonial>
            <HowWork></HowWork>
            <ComparisonSection></ComparisonSection>
            <CustomerFeedback></CustomerFeedback>
            <BackedScience></BackedScience>
            <QuestionAnswer></QuestionAnswer>
            <OrderNow></OrderNow>
            <PricingPlans></PricingPlans>
            <Footer></Footer> 
        </div>
    );
};

export default Root;