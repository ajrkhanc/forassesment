import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
    
    const submitF = async (event) => {      

        event.preventDefault();
        document.getElementById("submitbuttonform").value = "Submitting form....";

        const q1 = event.target.i1.value;
        const q2 = event.target.i2.value;
        const q3 = event.target.i3.value;
        const q4 = event.target.i4.value;
        const q5 = event.target.i5.value;
        const q6 = event.target.i6.value;
        const q7 = event.target.i7.value;
        const q8 = event.target.i8.value;
        const q9 = event.target.i9.value;
        const q10 = event.target.i10.value;
        const q11 = event.target.i11.value;
        const q12 = event.target.i12.value;
        const q13 = event.target.i13.value;
        const q14 = event.target.i14.value;
        const q15 = event.target.i15.value;
        const q16 = event.target.i16.value;
        const q17 = event.target.i17.value;
        const q18 = event.target.i18.value;
        const q19 = event.target.i19.value;
        const q20 = event.target.i20.value;
    


        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://forassesment.vercel.app/api/test/assform');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('q1=' + q1 +
            '&q2=' + q2 +
            '&q3=' + q3 +
            '&q4=' + q4 +
            '&q5=' + q5 +
            '&q6=' + q6 +
            '&q7=' + q7 +
            '&q8=' + q8 +
            '&q9=' + q9 +
            '&q10=' + q10 +
            '&q11=' + q11 +
            '&q12=' + q12 +
            '&q13=' + q13 +
            '&q14=' + q14 +
            '&q15=' + q15 +
            '&q16=' + q16 +
            '&q17=' + q17 +
            '&q18=' + q18 +
            '&q19=' + q19 +
            '&q20=' + q20 

            
            );

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {  
                if(xhr.status ==200){
                    document.getElementById("formreset").reset()
                        document.getElementById("response").innerHTML = "View Assessment"
                    

                        window.setTimeout(function() {
                            window.location.href = "/gtd-assessment-results"
                         }, 1000);                     
                                       
                }
                else{
                    document.getElementById("response").innerHTML = "You Have Submeted to go"
                     setTimeout(function () {
                        document.getElementById("response").innerHTML = "";
                        document.getElementById("submitbuttonform").value = "Submit JobForm";
                    }, 3000);
                }

                
            }


        }

        xhr.onerror = function () {
            console.log('error');
        }
   };

  return (
    <>
         <Head>
            <title>Get Access to the Best Psychometric Analysis by Everything DiSC<sup>®</sup></title>
            <meta name="description" content="Everything DiSC<sup>®</sup> assessment measures the personality and behavior of individuals. And, DiSC Analysis provides a detailed report for better understanding."/> 
          </Head>

          <div className='container'>
<form id='formreset' onSubmit={submitF}>
<div class="odd">
<h4>1. I sometimes lose track of things I need to do, because I failed to write them down or record them.</h4>
    <input type="radio" name="i1" value="5" id="sdisagree1"/><label for="sdisagree1">(5) Strongly Disagree</label>
    <input type="radio" name="i1" value="4" id="disagree1"/><label for="disagree1">(4) Disagree</label>
    <input type="radio" name="i1" value="3" id="neutral1"/><label for="neutral1">(3) Neutral</label>
    <input type="radio" name="i1" value="2" id="agree1" /><label for="agree1">(2) Agree</label>
    <input type="radio" name="i1" value="1" id="sagree1"/><label for="sagree1">(1) Strongly Agree</label>
</div> 

<div class="even">
<h4>2. When assignments come in, I don’t always capture them on paper, on my calendar, or anywhere.</h4>
    <input type="radio" name="i2" value="5" id="sdisagree2" tabindex="6" required="required" /><label for="sdisagree2">(5) Strongly Disagree</label>
    <input type="radio" name="i2" value="4" id="disagree2" tabindex="7"/><label for="disagree2">(4) Disagree</label>
    <input type="radio" name="i2" value="3" id="neutral2" tabindex="8"/><label for="neutral2">(3) Neutral</label>
    <input type="radio" name="i2" value="2" id="agree2" tabindex="9"/><label for="agree2">(2) Agree</label>
    <input type="radio" name="i2" value="1" id="sagree2" tabindex="10"/><label for="sagree2">(1) Strongly Agree</label>
</div>

<div class="odd">  
<h4>3.	I don’t always document my To-Dos and tasks, and this causes me to forget that I need to do them.</h4>
    <input type="radio" name="i3" value="5" id="sdisagree3" tabindex="11" required="required" /><label for="sdisagree3">(5) Strongly Disagree</label>
    <input type="radio" name="i3" value="4" id="disagree3" tabindex="12"/><label for="disagree3">(4) Disagree</label>
    <input type="radio" name="i3" value="3" id="neutral3" tabindex="13"/><label for="neutral3">(3) Neutral</label>
    <input type="radio" name="i3" value="2" id="agree3" tabindex="14"/><label for="agree3">(2) Agree</label>
    <input type="radio" name="i3" value="1" id="sagree3" tabindex="15"/><label for="sagree3">(1) Strongly Agree</label>
</div>

<div class="even">  
<h4>4.	At times, I feel stressed because I know there are things I need to do, but I can’t remember what they are.</h4>
	<input type="radio" name="i4" value="5" id="sdisagree4" tabindex="16" required="required" /><label for="sdisagree4">(5) Strongly Disagree</label>
    <input type="radio" name="i4" value="4" id="disagree4" tabindex="17"/><label for="disagree4">(4) Disagree</label>
    <input type="radio" name="i4" value="3" id="neutral4" tabindex="18"/><label for="neutral4">(3) Neutral</label>
    <input type="radio" name="i4" value="2" id="agree4" tabindex="19"/><label for="agree4">(2) Agree</label>
    <input type="radio" name="i4" value="1" id="sagree4" tabindex="20"/><label for="sagree4">(1) Strongly Agree</label>
</div>

<div class="odd">  
<h4>5.	Sometimes I glance at an email, feel a bit overwhelmed, and leave it for later.</h4>
    <input type="radio" name="i5" value="5" id="sdisagree5" tabindex="21" required="required" /><label for="sdisagree5">(5) Strongly Disagree</label>
    <input type="radio" name="i5" value="4" id="disagree5" tabindex="22"/><label for="disagree5">(4) Disagree</label>
    <input type="radio" name="i5" value="3" id="neutral5" tabindex="23"/><label for="neutral5">(3) Neutral</label>
    <input type="radio" name="i5" value="2" id="agree5" tabindex="24"/><label for="agree5">(2) Agree</label>
    <input type="radio" name="i5" value="1" id="sagree5" tabindex="25"/><label for="sagree5">(1) Strongly Agree</label>
</div>
	
<div class="even">  
<h4>6.	It’s not uncommon for me to revisit an email multiple times because I haven’t taken the time to fully decide what to do with it.</h4>
    <input type="radio" name="i6" value="5" id="sdisagree6" tabindex="26" required="required" /><label for="sdisagree6">(5) Strongly Disagree</label>
    <input type="radio" name="i6" value="4" id="disagree6" tabindex="27"/><label for="disagree6">(4) Disagree</label>
    <input type="radio" name="i6" value="3" id="neutral6" tabindex="28"/><label for="neutral6">(3) Neutral</label>
    <input type="radio" name="i6" value="2" id="agree6" tabindex="29"/><label for="agree6">(2) Agree</label>
    <input type="radio" name="i6" value="1" id="sagree6" tabindex="30"/><label for="sagree6">(1) Strongly Agree</label>
</div>

<div class="odd">  
<h4>7.	I often scan through all my emails looking for the ones that seem urgent or important, and leave the others for later.</h4>
    <input type="radio" name="i7" value="5" id="sdisagree7" tabindex="31" required="required" /><label for="sdisagree7">(5) Strongly Disagree</label>
    <input type="radio" name="i7" value="4" id="disagree7" tabindex="32"/><label for="disagree7">(4) Disagree</label>
    <input type="radio" name="i7" value="3" id="neutral7" tabindex="33"/><label for="neutral7">(3) Neutral</label>
    <input type="radio" name="i7" value="2" id="agree7" tabindex="34"/><label for="agree7">(2) Agree</label>
    <input type="radio" name="i7" value="1" id="sagree7" tabindex="35"/><label for="sagree7">(1) Strongly Agree</label>
</div>
   
<div class="even">  
<h4>8.	My inbox has become more of a storage bin than a place where things come and are quickly resolved.</h4>
    <input type="radio" name="i8" value="5" id="sdisagree8" tabindex="81" required="required" /><label for="sdisagree8">(5) Strongly Disagree</label>
    <input type="radio" name="i8" value="4" id="disagree8" tabindex="82"/><label for="disagree8">(4) Disagree</label>
    <input type="radio" name="i8" value="3" id="neutral8" tabindex="83"/><label for="neutral8">(3) Neutral</label>
    <input type="radio" name="i8" value="2" id="agree8" tabindex="84"/><label for="agree8">(2) Agree</label>
    <input type="radio" name="i8" value="1" id="sagree8" tabindex="85"/><label for="sagree8">(1) Strongly Agree</label>
</div>

<div class="odd">  
<h4>9.	Sometimes I’m startled by my calendar notifications, because they pop up when I am doing other things.</h4>
    <input type="radio" name="i9" value="5" id="sdisagree9" tabindex="86" required="required" /><label for="sdisagree9">(5) Strongly Disagree</label>
    <input type="radio" name="i9" value="4" id="disagree9" tabindex="87"/><label for="disagree9">(4) Disagree</label>
    <input type="radio" name="i9" value="3" id="neutral9" tabindex="88"/><label for="neutral9">(3) Neutral</label>
    <input type="radio" name="i9" value="2" id="agree9" tabindex="89"/><label for="agree9">(2) Agree</label>
    <input type="radio" name="i9" value="1" id="sagree9" tabindex="90"/><label for="sagree9">(1) Strongly Agree</label>
</div>
		
<div class="even">  
<h4>10.	At home, I find myself worrying about the things I need to remember to do the next day at work.</h4>
    <input type="radio" name="i10" value="5" id="sdisagree10" tabindex="91" required="required" /><label for="sdisagree10">(5) Strongly Disagree</label>
    <input type="radio" name="i10" value="4" id="disagree10" tabindex="92"/><label for="disagree10">(4) Disagree</label>
    <input type="radio" name="i10" value="3" id="neutral10" tabindex="93"/><label for="neutral10">(3) Neutral</label>
    <input type="radio" name="i10" value="2" id="agree10" tabindex="94"/><label for="agree10">(2) Agree</label>
    <input type="radio" name="i10" value="1" id="sagree10" tabindex="95"/><label for="sagree10">(1) Strongly Agree</label>
</div>

<div class="odd">  
<h4>11.	I have trouble letting go of To-Dos, because I’m not fully confident I’ll remember  them or be reminded of them at the right time.</h4>
    <input type="radio" name="i11" value="5" id="sdisagree11" tabindex="101" required="required" /><label for="sdisagree11">(5) Strongly Disagree</label>
    <input type="radio" name="i11" value="4" id="disagree11" tabindex="102"/><label for="disagree11">(4) Disagree</label>
    <input type="radio" name="i11" value="3" id="neutral11" tabindex="103"/><label for="neutral11">(3) Neutral</label>
    <input type="radio" name="i11" value="2" id="agree11" tabindex="104"/><label for="agree11">(2) Agree</label>
    <input type="radio" name="i11" value="1" id="sagree11" tabindex="105"/><label for="sagree11">(1) Strongly Agree</label>
</div>
		
<div class="even">  
<h4>12.	I regularly stress over remembering important tasks or events.</h4>
    <input type="radio" name="i12" value="5" id="sdisagree12" tabindex="106" required="required" /><label for="sdisagree12">(5) Strongly Disagree</label>
    <input type="radio" name="i12" value="4" id="disagree12" tabindex="107"/><label for="disagree12">(4) Disagree</label>
    <input type="radio" name="i12" value="3" id="neutral12" tabindex="108"/><label for="neutral12">(3) Neutral</label>
    <input type="radio" name="i12" value="2" id="agree12" tabindex="109"/><label for="agree12">(2) Agree</label>
    <input type="radio" name="i12" value="1" id="sagree12" tabindex="110"/><label for="sagree12">(1) Strongly Agree</label>
</div>
	   
<div class="odd">  
<h4>13.	I often feel as if I’m working really hard, but not getting the important jobs completed.</h4>
    <input type="radio" name="i13" value="5" id="sdisagree13" tabindex="111" required="required" /><label for="sdisagree13">(5) Strongly Disagree</label>
    <input type="radio" name="i13" value="4" id="disagree13" tabindex="112"/><label for="disagree13">(4) Disagree</label>
    <input type="radio" name="i13" value="3" id="neutral13" tabindex="113"/><label for="neutral13">(3) Neutral</label>
    <input type="radio" name="i13" value="2" id="agree13" tabindex="114"/><label for="agree13">(2) Agree</label>
    <input type="radio" name="i13" value="1" id="sagree13" tabindex="115"/><label for="sagree13">(1) Strongly Agree</label>
</div>
		   
<div class="even">  
<h4>14.	It’s common for me to feel overly busy, and yet uneasy about whether I’m getting the right stuff done.</h4>
    <input type="radio" name="i14" value="5" id="sdisagree14" tabindex="116" required="required" /><label for="sdisagree14">(5) Strongly Disagree</label>
    <input type="radio" name="i14" value="4" id="disagree14" tabindex="117"/><label for="disagree14">(4) Disagree</label>
    <input type="radio" name="i14" value="3" id="neutral14" tabindex="118"/><label for="neutral14">(3) Neutral</label>
    <input type="radio" name="i14" value="2" id="agree14" tabindex="119"/><label for="agree14">(2) Agree</label>
    <input type="radio" name="i14" value="1" id="sagree14" tabindex="120"/><label for="sagree14">(1) Strongly Agree</label>
</div>
    
<div class="odd">  
<h4>15.	I often worry about the priorities I’m not working on, even though I’m putting in a lot of hours and getting a lot done.</h4>
    <input type="radio" name="i15" value="5" id="sdisagree15" tabindex="126" required="required" /><label for="sdisagree15">(5) Strongly Disagree</label>
    <input type="radio" name="i15" value="4" id="disagree15" tabindex="116"/><label for="disagree15">(4) Disagree</label>
    <input type="radio" name="i15" value="3" id="neutral15" tabindex="117"/><label for="neutral15">(3) Neutral</label>
    <input type="radio" name="i15" value="2" id="agree15" tabindex="129"/><label for="agree15">(2) Agree</label>
    <input type="radio" name="i15" value="1" id="sagree15" tabindex="130"/><label for="sagree15">(1) Strongly Agree</label>
</div>
	
<div class="even">  
<h4>16.	I’m working as hard as I can, but there are times when I’m troubled that I might not be working on the right priorities.</h4>
    <input type="radio" name="i16" value="5" id="sdisagree16" tabindex="140" required="required" /><label for="sdisagree16">(5) Strongly Disagree</label>
    <input type="radio" name="i16" value="4" id="disagree16" tabindex="141"/><label for="disagree16">(4) Disagree</label>
    <input type="radio" name="i16" value="3" id="neutral16" tabindex="142"/><label for="neutral16">(3) Neutral</label>
    <input type="radio" name="i16" value="2" id="agree16" tabindex="143"/><label for="agree16">(2) Agree</label>
    <input type="radio" name="i16" value="1" id="sagree16" tabindex="144"/><label for="sagree16">(1) Strongly Agree</label>
</div>
	   
<div class="odd">  
<h4>17.	At least once a week, I take time to pause, clear my mind, update my accomplishments, and take stock of where I stand.</h4>
    <input type="radio" name="i17" value="1" id="sdisagree17" tabindex="145" required/><label for="sdisagree17">(5) Strongly Disagree</label>
    <input type="radio" name="i17" value="2" id="disagree17" tabindex="146"/><label for="disagree17">(4) Disagree</label>
    <input type="radio" name="i17" value="3" id="neutral17" tabindex="147"/><label for="neutral17">(3) Neutral</label>
    <input type="radio" name="i17" value="4" id="agree17" tabindex="148"/><label for="agree17">(2) Agree</label>
    <input type="radio" name="i17" value="5" id="sagree17" tabindex="149"/><label for="sagree17">(1) Strongly Agree</label>
</div>
		   
<div class="even">  
<h4>18.	I regularly review the connection (or lack of connection) between my daily tasks and my high-level priorities.</h4>
    <input type="radio" name="i18" value="1" id="sdisagree18" tabindex="141" required/><label for="sdisagree18">(5) Strongly Disagree</label>
    <input type="radio" name="i18" value="2" id="disagree18" tabindex="142"/><label for="disagree18">(4) Disagree</label>
    <input type="radio" name="i18" value="3" id="neutral18" tabindex="143"/><label for="neutral18">(3) Neutral</label>
    <input type="radio" name="i18" value="4" id="agree18" tabindex="144"/><label for="agree18">(2) Agree</label>
    <input type="radio" name="i18" value="5" id="sagree18" tabindex="145"/><label for="sagree18">(1) Strongly Agree</label>
</div>

<div class="odd">  
<h4>19.	Every few days I step back and evaluate the connection between my actions and my long-term goals.</h4>
    <input type="radio" name="i19" value="1" id="sdisagree19" tabindex="151" required/><label for="sdisagree19">(5) Strongly Disagree</label>
    <input type="radio" name="i19" value="2" id="disagree19" tabindex="152"/><label for="disagree19">(4) Disagree</label>
    <input type="radio" name="i19" value="3" id="neutral19" tabindex="153"/><label for="neutral19">(3) Neutral</label>
    <input type="radio" name="i19" value="4" id="agree19" tabindex="154"/><label for="agree19">(2) Agree</label>
    <input type="radio" name="i19" value="5" id="sagree19" tabindex="155"/><label for="sagree19">(1) Strongly Agree</label>
</div>
	
<div class="even">  
<h4>20.	I regularly take time to consider my longer-term goals.</h4>
    <input type="radio" name="i20" value="1" id="sdisagree20" tabindex="156" required/><label for="sdisagree20">(5) Strongly Disagree</label>
    <input type="radio" name="i20" value="2" id="disagree20" tabindex="157"/><label for="disagree20">(4) Disagree</label>
    <input type="radio" name="i20" value="3" id="neutral20" tabindex="158"/><label for="neutral20">(3) Neutral</label>
    <input type="radio" name="i20" value="4" id="agree20" tabindex="159"/><label for="agree20">(2) Agree</label>
    <input type="radio" name="i20" value="5" id="sagree20" tabindex="160"/><label for="sagree20">(1) Strongly Agree</label>
</div>
    

	   
    <input id="submitbuttonform" type="submit" value="Submit" class="clientcornnerbtn" tabindex="201"/>
    <p class="feedbackcolor" id="response"></p>
</form>
          </div>

    </>
  )
}