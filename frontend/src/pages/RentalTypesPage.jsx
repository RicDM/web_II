import { RentalTypes } from '../components/RentalTypes'
import { Header } from "../components/Header";

export const RentalTypesPage = () => {
    return (
        <>
            <Header />
            <div className="container-xxl py-5">
                <div className="container" id="com-propstypes">
                    <RentalTypes/>
                </div>
            </div>
        </>
    )
}