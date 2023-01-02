import { useState } from "react";
import $ from "jquery";
import { useEffect } from "react";
import axios from "axios";
import { getCurrentDate } from "../pages/utils/Date";
// import "./App.css";

function Phptest() {

    useEffect(() => {
        fetch("http://localhost")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                }
            )
    }, []);
    return (
        <div className="phptest">
            test
        </div>
    );
}

export default Phptest;