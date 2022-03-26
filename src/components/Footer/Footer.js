import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer_section'>
            <br/><br/><br/>
            <hr />
            <div className='question_text'>
                <h1> Questions and Answer : </h1><br/><br/>
                
                <h3>1) How react works ?</h3>
                <b>Answer:</b>
                <p>
                React একটি জাভাস্ক্রিপ্ট মুলত একটা লাইব্রেরি এবং এটা মুলত ইউজার ইন্টারফেস তৈরির জন্য কাজ করে থাকে । রেন্ডার এর সময়  useEffect, useState,Component কে DOM পাঠায় এবং  React এর কম্পনেন্ট এ Jsx এ ফাইলে HTML  ও JS লিখে এটা কে থেকে নিয়ে React virtual DOM ও HTML DOM এর সাহাজ্যে ইউজারের জন্যে একটা ভিউ তৈরী করে। React একটি ভার্চুয়াল DOM দিয়ে যা মূলত জাভাস্ক্রিপ্টে একটি DOM তৈরী করে। 
                সেখানে যদি নতুন কিছু আপডেট করা হয় তখন  React virtual DOM টা HTML DOM  কে কম্পিয়ার করে state আপডেট করে এক্টটা নতুন আপডেট দেয়.  
                </p>
                <br/>
                <h3>2) Props Vs Stats: </h3>
                <b>Answer:</b>  <br /> <br />             
                <div className='table_p_s'>
                    <div>
                        <b>Props</b>
                        <div>
                            <p> <b> =) </b> Props কম্পোনেন্টে ভেরিয়েবল এর মত পাঠিয়ে ব্যবহার যায়</p> 
                            <p> <b> =) </b> Parent Component  থেকে একে  পৰিৱৰ্তন করা হয় </p>
                            <p> <b> =) </b> কিন্তু child Component  থেকে একে শুধু ব্যবহার যায়, পৰিৱৰ্তন করা যায়না</p>
                            <p> <b> =) </b> কম্পোনেন্টে Props  এর মান পুনরায় ব্যবহার যায়</p>
                            <p> <b> =) </b> Props সাধারণত ব্যবহার হয়  components এর ডাটা  প্রধানের জন্যে সংযোগ স্থাপনে।</p>
                        </div>
                    </div>
                    <div>
                        <b>State</b>
                        <div>
                            <p> <b> =) </b> State কিন্তু asynchronous উপায়ে পরিবর্তন করা যায়</p>
                            <p> <b> =) </b> Parent Component  থেকে একে পৰিৱৰ্তন করা যায়না</p>
                            <p> <b> =) </b> Child Component  থেকে একে পৰিৱৰ্তন করা যায়না</p>
                            <p> <b> =) </b> State কম্পোনেন্টের লোকাল স্কোপ যা বাইরে ব্যবহার এবং পরিবর্তন করা যায় না।</p>
                            <p> <b> =) </b> State সাধারণত ব্যবহার হয়  components এর ডাইনামিক rendering এর জন্যে </p>

                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className='footer_text '>
                <p> Copyright © 2022 Painting Gallery </p>
            </div>
        </div>
    );
};

export default Footer;