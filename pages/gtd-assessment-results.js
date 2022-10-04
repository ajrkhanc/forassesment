import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export async function getServerSideProps() {
    const res = await fetch('https://assesmentresult.herokuapp.com/api/fresult')
    const result = await res.json()

    

    return {
      props: {
        result  
      },
    }
  }

export default function Home({result}) {  


//   const q1 = i1;
//   const q2 = i2;
//   const q3 = i3;
//   const q4 = i4;
//   const q5 = i5;
//   const q6 = i6;
//   const q7 = i7;
//   const q8 = i8;
//   const q9 = i9;
//   const q10 = i10;
//   const q11 = i11;
//   const q12 = i12;
//   const q13 = i13;
//   const q14 = i14;
//   const q15 = i15;
//   const q16 = i16;
//   const q17 = i17;
//   const q18 = i18;
//   const q19 = i19;
//   const q20 = i20;
     
        
  return (
    <>
         <Head>
            <title>Get Access to the Best Psychometric Analysis by Everything DiSC<sup>®</sup></title>
            <meta name="description" content="Everything DiSC<sup>®</sup> assessment measures the personality and behavior of individuals. And, DiSC Analysis provides a detailed report for better understanding."/> 
          </Head>

<div className='container'>
    <div className='row'>
          {
            result.slice(0, 1).map((results) => {
                var px = '%'
                var overall = parseInt(results.q1) + parseInt(results.q2) +
                parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) +
                parseInt(results.q4) + parseInt(results.q5) + parseInt(results.q6) +
                parseInt(results.q7) + parseInt(results.q8) + parseInt(results.q9) +
                parseInt(results.q10) + parseInt(results.q11) + parseInt(results.q12) +
                parseInt(results.q13) + parseInt(results.q14) + parseInt(results.q15) +
                parseInt(results.q16) + parseInt(results.q17) + parseInt(results.q18) +
                parseInt(results.q19) + parseInt(results.q20)

                var overall = overall+px

                var Capture = parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) +
                parseInt(results.q4)
                var Capture = 5*Capture+px

                var Clarify = parseInt(results.q5) + parseInt(results.q6) +
                parseInt(results.q7) + parseInt(results.q8)
                var Clarify = 5*Clarify+px

                var Organize = parseInt(results.q9) +
                parseInt(results.q10) + parseInt(results.q11) + parseInt(results.q12)
                var Organize = 5*Organize+px

                var ReflectEngage = parseInt(results.q13) + parseInt(results.q14) + parseInt(results.q15) +
                parseInt(results.q16)
                var ReflectEngage = 5*ReflectEngage+px

                var RenewThroughReview = parseInt(results.q17) + parseInt(results.q18) +
                parseInt(results.q19) + parseInt(results.q20)
                var RenewThroughReview = 5*RenewThroughReview+px


            return (
            <div class="recent-post-widget">
                <div class="component-wrapper assessment" id="gtd-results">
    <div class="component-content">
        <div class="assessment-left">
            <div class="assessment-title"> Your Results</div>
            <p>Our research found that individuals with strong GTD habits are 18 times less likely to say they feel overwhelmed because of tasks that are looming and might crash, and 14 times less likely to say they worry a lot about whether they've completely everything they need to do. Being more productive in the GTD way doesn't mean more stress, it means less stress.</p>
        </div>
        <div class="assessment-right">
            

            <div class="assessment-result-block">
                <h3>Overall Score</h3>
                                <div class="result-bar-wrapper">
                    <div class="result-bar" style={{width:overall}}></div>
                </div>
                <div class="result-bar-labels">
                    <div class="label-left">Overloaded</div>
                    <div class="label-middle"></div>
                    <div class="label-right">Doing Well</div>
                </div>
            </div>

            <div class="assessment-result-block">
                <h3>Capture</h3>
              
                                <div class="result-bar-wrapper">
                    <div class="result-bar" style={{width:Capture}}></div>
                </div>
                <div class="result-bar-labels">
                    <div class="label-left">Overloaded</div>
                    <div class="label-middle"></div>
                    <div class="label-right">Doing Well</div>
                </div>
                <p>A low score means you’re experiencing mental overload. Your current system isn’t robust enough to keep track of everything coming at you. As a result, too many of your to-dos fall through the cracks, causing you worry and stress. Improvement will require you to stop relying on your memory. Instead, select a small number of capture tools where you record and collect all of your incoming tasks.</p>
            </div>

            <div class="assessment-result-block">
                <h3>Clarify</h3>
               
                                <div class="result-bar-wrapper">
                    <div class="result-bar" style={{width:Clarify}}></div>
                </div>
                <div class="result-bar-labels">
                    <div class="label-left">Overloaded</div>
                    <div class="label-middle"></div>
                    <div class="label-right">Doing Well</div>
                </div>
                <p>A low score means you’re feeling buried under a mountain of tasks and to-dos. Your current system for handling your email inbox isn’t good enough to keep you on top of your work. As a result, your time is spent putting out fires, and you’re rarely able to relax. Improvement will require you to stop using your email inbox as a storage bin. Instead, review new items every day, and determine the next action to take.</p>
            </div>

            <div class="assessment-result-block">
                <h3>Organize</h3>
                
                                <div class="result-bar-wrapper">
                    <div class="result-bar" style={{width:Organize}}></div>
                </div>
                <div class="result-bar-labels">
                    <div class="label-left">Overloaded</div>
                    <div class="label-middle"></div>
                    <div class="label-right">Doing Well</div>
                </div>
                <p>A low score means you struggle to keep track of all the assignments and to-dos you are juggling. Your current system for organizing tasks doesn’t do enough to remind you at the right times and places. As a result, you experience anxiety and drop the ball more often than you should. Improvement will require you to change the way you use task lists and calendars.</p>
            </div>

            <div class="assessment-result-block">
                <h3>Reflect &amp; Engage</h3>
                                <div class="result-bar-wrapper">
                    <div class="result-bar" style={{width:ReflectEngage}}></div>
                </div>
                <div class="result-bar-labels">
                    <div class="label-left">Overloaded</div>
                    <div class="label-middle"></div>
                    <div class="label-right">Doing Well</div>
                </div>
                <p>A low score means you’re frequently distracted, instead of being truly present and focused. Your current system for evaluating tasks doesn’t give you confidence in your priorities. As a result, your attention is divided between what you’re currently doing and what you think you should be doing. Improvement will require you to take the time to check your lists and calendar before taking action.</p>
            </div>

            <div class="assessment-result-block">
                <h3>Renew Through Review</h3>
                                <div class="result-bar-wrapper">
                    <div class="result-bar" style={{width:RenewThroughReview}}></div>
                </div>
                <div class="result-bar-labels">
                    <div class="label-left">Overloaded</div>
                    <div class="label-middle"></div>
                    <div class="label-right">Doing Well</div>
                </div>
                <p>A low score means you’re experiencing disconnects between your daily life and what you truly care about. Your current system for staying aligned isn’t tracking with your values. As a result, you disappoint yourself and others. Improvement will require you to stop, take stock, and realign on a regular basis.</p>
            </div>
        </div>
    </div>
</div>
            </div>
            );
            })
            }

          
</div>
</div>
 
   

    </>
  )
}



