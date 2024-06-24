//import reactBackGroundLogo from "../assets/joshua.jpg";
import React from "react"

export const Section = (props) => {
    return (
        <section className={props.darkMode ? "dark" : ""}>
            <br />
            <h2 className="FunFactsTitle">Fun facts about React</h2>
            <br />
            <ul className="FunFactsList">
                <li className="FunFactsListItem FunFactsListItem-1">Was first released in 2013</li>
                <li className="FunFactsListItem FunFactsListItem-2">Was originally created by Jordan Walke</li>
                <li className="FunFactsListItem FunFactsListItem-3">Has well over 100K starts on GitHub</li>
                <li className="FunFactsListItem FunFactsListItem-4">Is maintained by Facebook</li>
                <li className="FunFactsListItem FunFactsListItem-5">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </section>
    )
}
