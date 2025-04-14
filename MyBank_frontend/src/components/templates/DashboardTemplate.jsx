import Header from "../organisms/Header";
import Navigation from "../organisms/Navigation";
import DashboardContent from "../organisms/DashboardContent";

const DashboardTemplate = () => {
    return ( 
        <>
            <div id="dashboard-wrapper" className="w-full h-screen flex justify-center items-center flex-col overflow-x-hidden">
                <Header />

                <main>
                    <Navigation />
                    <DashboardContent />
                </main>
            </div>
        </>
     );
}
 
export default DashboardTemplate;