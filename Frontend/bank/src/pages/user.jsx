import TransactionHistory from "../components/TransactionHistory";
import UserProfil from "../components/UserProfil";

function AfficheProfil() {
    return(
        <div>
            <UserProfil/>
            <TransactionHistory/>
        </div>
    )
}

export default AfficheProfil