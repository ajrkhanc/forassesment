
import Head from "next/head";


 



export default function PrivatePage() {  
 
 


    const submitFeedback = async (event) => {
        // event.preventDefault();
        // document.getElementById("submitbuttonform").value = "Submitting form....";

        // const FullName = event.target.name.value;
        // const Email = event.target.email.value;


        // var xhr = new XMLHttpRequest();
        // xhr.open('POST', 'http://localhost:3000/api/test/add');
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.send('name=' + FullName +
        //     '&email=' + Email);

        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState == 4) {
        //         if(xhr.test.__v ==0){
        //             console.log(xhr.responseText);
        //             document.getElementById("feebackform").reset()
        //             document.getElementById("response").innerHTML = "Job Applican Submitted"
    
        //             setTimeout(function () {
        //                 document.getElementById("response").innerHTML = "";
        //                 document.getElementById("submitbuttonform").value = "Submit JobForm";
        //             }, 3000);
        //         }

        //         else{
        //             document.getElementById("response").innerHTML = "You Have Submeted to go"
        //              setTimeout(function () {
        //                 document.getElementById("response").innerHTML = "";
        //                 document.getElementById("submitbuttonform").value = "Submit JobForm";
        //             }, 3000);
        //         }
                
        //     }

          


        // }

        // xhr.onerror = function () {
        //     console.log('error');
        // }




        event.preventDefault();
        document.getElementById("submitbuttonform").value = "Submitting form....";

        const FullName = event.target.name.value;
        const Email = event.target.email.value;


        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/api/test/add');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('name=' + FullName +
            '&email=' + Email);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {  
                if(xhr.status ==200){
                    
                    var response = JSON.parse(xhr.responseText)
                    console.log(response.error);
                    if(response.error == undefined){
                        document.getElementById("feebackform").reset()
                        document.getElementById("response").innerHTML = "Submitted"
        
                        setTimeout(function () {
                            document.getElementById("response").innerHTML = "";
                            document.getElementById("submitbuttonform").value = "Submit JobForm";
                        }, 3000);
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

          


        }

        xhr.onerror = function () {
            console.log('error');
        }
    };

    return (
        <>


            <Head>
                <title>JobForm - Yomamultinational</title>
                <meta name="description" content="Blanchard Research and Training LLP is the leading training provider in South Asia, with expertise in leadership development across hierarchies. Having a global establishment of over 35 years and operational in India since 2008 by Mr Yogesh Sood who is a veteran in business operations and leadership development." />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <section className="pt-40 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="blog-details-content singleblog">
                                <div className="comment-form-wrap wow fadeInUp delay-0-2s animated">
                                    <h3 className="comment-title mb-55">Job Applicant Form</h3>
                                    <form id="feebackform" onSubmit={submitFeedback} className="comment-form">
                                        <div className="row clearfix justify-content-center">

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" id="name" name="name" pattern="[a-z, A-Z]*" title="Only alphabets are allowed" className="form-control" placeholder="Name*" required />
                                                </div>
                                            </div>
 
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="email" id="email" name="email" className="form-control" placeholder="Email*" required />
                                                </div>
                                            </div>
 
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Submit JobForm" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <p class="feedbackcolor" id="response"></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>

    );
}