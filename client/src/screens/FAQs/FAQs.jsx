import Accordians from "../../components/Accordians/Accordians";
import './FAQs.css'

function FAQs() {
    return (
        <div className="faqs py-5">
            <div className="container">
                <div className="mb-5 text-center">
                    <h1 className="heading">Frequently Asked Questions</h1>
                </div>
                
                <Accordians title="What does Your Lawyer offer?" answer="We are a legal services platform where a client can get in touch with the lawyers and get advice instantly. We also offer in-house documentation services which are currently limited to major cities in Bangladesh but online services are accessible all across the globe." target="collapseOne" heading="headingOne"/>

                
                <Accordians title="How can I get in touch with a lawyer?" answer="Once the client selects the lawyer from the list, he/she needs to book an appointment with that lawyer. Both the client as well as the lawyer will get a notification immediately. Lawyer will confirm the appointment depending on his/her availability, after which the client can make the online payment under the appointment section and be ready at the time of the appointment." target="collapseTwo" heading="headingTwo"/>

                <Accordians title="Should I register to the app to avail the services?" answer="Yes, for security purposes, you are required to register to avail any service." target="collapseThree" heading="headingThree"/>

                <Accordians title="How much is the consultation fee?" answer="Depending on the experience, each lawyer has put up their consultation fee. You can have a look at it." target="collapseFour" heading="headingFour"/>

                <Accordians title="How do I trust the lawyers listed?" answer="All the lawyers listed in our app are verified lawyers and all are currently practicing lawyers." target="collapseFive" heading="headingFive"/>

                <Accordians title="How long can I consult a lawyer?" answer="Usually, consultations can go on for half an hour. If the client wants to extend consultation time, additional payment has to be made." target="collapseSix" heading="headingSix"/>

                <Accordians title="Can I make the payment after the consultation?" answer="No, we take the payment beforehand, to ensure quality and standards. Lawyers are paid only after reviewing with the client." target="collapseSeven" heading="headingSeven"/>

                <Accordians title="Can I get free legal advice?" answer="No, clients need to purchase a package to get unlimited chat for legal advice" target="collapseEight" heading="headingEight"/>

                <Accordians title="What if I cannot make it during the appointment time?" answer="You have 30 days from the time of appointment after you mutually agree with the lawyer, to reschedule the same appointment, after which it will be termed invalid and the client will have to take a new appointment and wait on confirmation." target="collapseNine" heading="headingNine"/>

                <Accordians title="What if I am not satisfied with the advice provided by the lawyer?" answer="If you are not satisfied with the advice received by the lawyer, we will assign an in-house case manager to look into the issue and get it sorted immediately and if you are still not satisfied, we will take actions for refund. (Partial or Full or None depending on the issue)" target="collapseTen" heading="headingTen"/>

                <Accordians title="How do you write a will?" answer="Write the introduction to the will. Start by clearly labeling the document “Last Will and Testament.”... Pick an executor. Recognize your heirs. ... Name a guardian for any minor or dependent children. ... Appraise and partition your property. ... Sign the will. ... Sign by witness" target="collapseEleveen" heading="headingEleveen"/>

                <Accordians title="How can I complaint in consumer court?" answer="•	You should be a consumer for giving complaints in consumer court.
•	Before filing a complaint, you should provide a notice to supplier or service provider
regarding rectifying the issue. It is a one-month notice. You should address the notice to nearest address available.
•	Complaint must be filed within 2 years or you should have reasonable cause for delay, then you can request.
•	It is better to have an index regarding each document and page.
•	Complaint – containing details of the grievance, preferably arranged in chronological order; briefly giving the ground on which relief is claimed, and the relief (including legal costs, damages and interest) claimed. Consumer should be signed in complaint.
•	You or your close relative can appear in forum.
" target="collapseTwelve" heading="headingTwelve"/>

                <Accordians title="What is sexual harassment at workplace?" answer="Sexual harassment at work can take many forms, includes any avoidable sexual advances either verbal or through gestures or through use of sexually suggestive or pornographic material, and includes amongst others; whistling, sexually slanting and obscene remarks or jokes; comments about physical appearance; demands for sexual favours; threats, innuendoes; avoidable physical contacts, touching, patting, pinching; physical assaults and molestation of and towards women workers by their male colleagues, or anyone who for the time being is in a position to sexually harass the women." target="collapseThirteen" heading="headingThirteen"/>

                <Accordians title="What is child abuse?" answer="Sexual abuse towards a child is called “Paedophilia”, which is a psychic disorder when a person is attracted towards a child. A person who is diagnosed with paedophilia must be at least 16 years old, but adolescents must be at least five years older than the prepubescent child for the attraction to be diagnosed as paedophilia. The individual’s with Paedophilia must have intense and recurrent sexual urges and fantasies about pre-pubertal children." target="collapseFourteen" heading="headingFourteen"/>

                <Accordians title="What are the legal formalities for starting a business?" answer="Many entrepreneurs aren’t specialised in the fields of business law and are starting with a capital of limited to non-existent budget. Hiring lawyers who are friends, relatives or others who offer steep fee discounts makes mistakes in forming their business and can cause enormous problems later. When looking to form a business entity, the most important point is to get assistance from an expert business lawyer as it will lay a strong legal foundation." target="collapseFifteen" heading="headingFifteen"/>

                <Accordians title="How to register complaints against online frauds?" answer="One of the major problems with adequately defining cybercrime is the lack of factual statistical data on these crimes. Laws in different jurisdictions define terms differently, and it is important for law enforcement officers who investigate crimes, also the network administrators who engaged in prosecuting cybercrime need to become familiar with the applicable laws." target="collapseSixteen" heading="headingSixteen"/>

            </div>

            
        </div>
    )
}

export default FAQs;