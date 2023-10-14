import 'bootstrap/dist/css/bootstrap.min.css'
import "../App.css"
import { useState } from 'react';
function Design(){
    const [date,display_Date]=useState(0);
    const[Flag,change_Flag]=useState(true);
    function get_date(e){
        change_Flag(true);
        console.log(typeof e.target.value);
        let get_year_arr=e.target.value.split("-");
       let get_year=get_year_arr[0];
        let cur=new Date();
        display_Date(cur.getFullYear()-get_year);
    }
    function display(e){
        e.preventDefault();
        e.stopPropagation();
        change_Flag(false);
    }

    return(
        <>
        <h1 className='heading'>Age Calculator</h1>
        <div className='refactor mt-5'><input type='Date' className='form-control' onChange={get_date}></input>
        </div>
        <div className='center'>
        <button className='btn btn-info mx-auto click' onClick={display}>Calculate Age</button>
        </div>
       
        <p hidden={Flag} className='disp'>You are {date} years old my friend.</p>
        </>
    )
}
export {Design};