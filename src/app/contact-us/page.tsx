
import Header from "../components/header"
export default function Contact(){
    return(
        <div className="contact">
            <Header/>
            <h1>
                Contact Us
            </h1>
            <div className="Input-div">
<input type="text-area" placeholder="Enter your name" required>
</input>
<input type="text-area" placeholder="Enter your Email" required></input>
<input type="text-area" placeholder="Enter your Github Link" required>
</input> 
            
            </div>
        </div>
    )
}