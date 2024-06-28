import exampleFlowDiscovery from "../../../assets/images/buser-page/example-flow-discovery.png";
import exampleOldUserJourney from "../../../assets/images/buser-page/example-old-user-journey.png";
import actualUserJourney from "../../../assets/images/buser-page/actual-user-journey.png";
import screenWithAllIncidents from "../../../assets/images/buser-page/Screen with all incidents.png";
import moreContentInsideTheIncidentModal from "../../../assets/images/buser-page/More content inside the incident modal.png";
import legacyUserScreenForInitiateAIndividualRefund from "../../../assets/images/buser-page/Legacy user screen for initiate a individual refund.png";
import legacyUserScreenWithNewModal from "../../../assets/images/buser-page/Legacy user screen with new modal.png";
import stepfillsExample from "../../../assets/images/buser-page/step fills example.png";
import stepFillsAddingCost from "../../../assets/images/buser-page/step fills example 2.png";
import Image from "next/image";

const UnpublicOne = () => (
  <>
    <h5>My job here was...</h5>
    <p>
      I was responsable to improve new and old features for many squads on
      Vivo, BX (Vivo Experiênce, squad who handle Vivo client contact), Risk
      (squad who handle incidents may cause by travels), Partner (squad who
      handle all partners contact with Vivo, partner is the company who has the
      bus in fact) and sometimes Quality (squad who look for any problem hepened
      and understood who is the cause and how to solve to do not happen again).
    </p>

    <p className="bold">The problem(s)</p>
    <p>
      The Risk squad need's to handle all incidents in a long flow time and de
      BX squad only need's to make de refund for passengers, individual or in
      group, refunds which may or may not have originated from an incident, at
      this moment, the BX squad only can do individual refunds and only when an
      incident has been created. Some problems with the current model:
    </p>

    <ul>
      <li>
        BX squad has to wait for Risk squad to finish an incident handling to
        actually send the refund, because the refund at this moment is linked to
        the conclusion of the travel_group, and if there is an incident created,
        it will only complete after all the treatment of it, this The process
        sometimes takes a long time, which generates a bad experience for the
        end customer.
      </li>
      <li>
        Bad history of actions and conversation, sometimes ticket on jira,
        sometimes whatsapp or slack, this spends a lot of time looking for what
        is missing to finish a treatment or what has already been done or talked
        about.
      </li>
      <li>Not clear actions for both squad in every incident category.</li>
      <li>Not fast way to claim partner help.</li>
      <li>The client refund is not automatic but can be.</li>
      <li>Table-dependent handling flow in google sheets</li>
    </ul>

    <p className="bold">Research and test</p>
    <p>
      At this moment we have some assumptions of solutions for some related
      problems but we know, after years of experience, we can't build anything
      before a deep research about the problem, sometimes the related problem
      shouldn't even exist, sometimes you find that if fixing 2 or 3 steps
      before the problem didn't even exist. At this point we design and talk a
      lot around what we are trying to solve to understand what can be removed,
      improved or added to the current workflow, and after that, build a
      prototype to be tested.
    </p>
    <figure>
      <Image
        src={exampleFlowDiscovery}
        alt="Image cut from the original research flow"
      />
      <figcaption>Image cut from the original research flow</figcaption>
    </figure>
    <p>
      I used figma's FigJam tool to make the flow of understanding more visual
      and easier to understand. The purpose of our flow was:
    </p>

    <ul>
      <li>Map all incident categories</li>
      <li>Map the resolution flow of each category up to that point in time</li>
      <li>
        Understand where the two areas, BX and Risk, conflicted in these
        resolutions
      </li>
    </ul>
    <p>
      After many conversations, drawings and tests on some UI prototypes, we
      managed to understand what we really needed to solve, a summary of what we
      discovered:
    </p>
    <ul>
      <li>Not all incidents required the action of both squads</li>
      <li>
        The Risk team needed to visualize all incidents oriented to the
        documents that are missing in each of them, most incidents need several
        documents, without them the process is not completed
      </li>
      <li>
        The BX squad did not have a way to make group refunds, at that time they
        only had the option to make one at a time and with limitations, it took
        a long time for repeated actions, there was no list just to view BX
        refunds
      </li>
      <li>
        It was not defined who created the incident in the system, sometimes
        someone from the BX squad created the risk, the Risk Squad wanted only
        them to create the incident because sometimes the BX created was filled
        in wrong, but to make a refund, thing that the BX squad needed, it could
        only be done with an incident created, that is, in this way, one squad
        was waiting for another to take an action, and when another took it, it
        was sometimes wrong, in short: we needed to decouple the action of
        making a refund for a passenger of the need to have an incident created
        but sometimes the refund was made on account of an incident, now what?
        how to solve this?
      </li>
      <li>
        The Risk squad needed an automated payment for fines and mechanical
        repairs, at that moment they depended on entering another financial
        system and almost filling in everything they had already filled out to
        generate a payment request for the company finance
      </li>
      <li>
        There was no easy URL for every incident created, meaning if an analyst
        wanted another analyst to see exactly the incident he was sharing the
        only way was to look in a listing, filter and then open it.
      </li>
      <li>
        The UI needs to be equal the Vuetify 1.5 framework, the intern system
        has this legacy “problem” : /
      </li>
    </ul>
    <figure>
      <Image
        src={exampleOldUserJourney}
        alt="Image cut from the original old caotic user journey"
      />
      <figcaption>
        Image cut from the original old caotic user journey
      </figcaption>
    </figure>
    <p className="bold">Solution and tests</p>
    <p>
      So, after some prototypes and tests I understood that the solution was
      possibly simpler than we thought, if we defined all the categories of
      incidents and refunds, with their necessary actions, that is, what each
      squad should do in each of them, then all other problems would be solved
      in cascade, follow my reasoning:
    </p>
    <ul>
      <li>
        I set up a table with all types of incidents and types of refunds and
        what each one needed from each squad, some needed the BX squad to refund
        all passengers, others just individual refunds, some needed the Risk
        squad to do several actions such as taking a mechanic shop, calling
        passengers for help and charging the partner for sending documents and
        some incidents involved all of this at the same time. The interface
        oriented to the categories of refunds/incidents allowed any BX analyst
        who received a call to only worry about posting the refund needed for
        passengers, according to the category understood, and this generated a
        refund line, every refund line may or may not have an incident linked to
        which risk needs to act, with each category now detailed which squad
        should act or not, automatically, when necessary, the system itself
        notifies the risk squad of a new incident created, it just needs to
        validate and fill in, the BX clerk no longer has to wait for the risk
        caller to create an incident for him to make the refund, and the risk
        clerk can freely fill in the incident information, all without one
        expecting the other to act.
      </li>
    </ul>
    <figure>
      <Image src={actualUserJourney} alt="Actual User Journey" />
      <figcaption>Image cut from the actual user journey</figcaption>
    </figure>
    <ul>
      <li>
        After adjust de user journey about refund and incident treatment, I
        transpiled this in real UI screens to test the new flow, this screens
        use the vuetify version 1.5
      </li>
    </ul>
    <figure>
      <Image src={screenWithAllIncidents} alt="Screen with all incidents" />
      <figcaption>Screen with all incidents</figcaption>
    </figure>
    <figure>
      <Image
        src={moreContentInsideTheIncidentModal}
        alt="More content inside the incident modal"
      />
      <figcaption>More content inside the incident modal</figcaption>
    </figure>
    <figure>
      <Image
        src={legacyUserScreenForInitiateAIndividualRefund}
        alt="Legacy user screen for initiate a individual refund"
      />
      <figcaption>
        Legacy user screen for initiate a individual refund
      </figcaption>
    </figure>
    <figure>
      <Image
        src={legacyUserScreenWithNewModal}
        alt="Legacy user screen with new modal"
      />
      <figcaption>Legacy user screen with new modal</figcaption>
    </figure>

    <div style={{ display: "flex", gap: "24px" }}>
      <figure>
        <Image src={stepfillsExample} alt="Step fills example" />
        <figcaption>Step fills example</figcaption>
      </figure>
      <figure>
        <Image src={stepFillsAddingCost} alt="Step fills adding cost" />
        <figcaption>Step fills adding cost</figcaption>
      </figure>
    </div>
    <p className="bold">Conclusion</p>
    <p>
      At the end of part of my journey at Buser, I solved the following
      problems:
    </p>
    <ul>
      <li>
        Now BX Squad analysts are able to make individual and collective refunds
        to passengers without having to wait for any action from the risk squad.
      </li>
      <li>
        Now the Risk squad analysts can fill in everything they need for the
        incidents they act on without worrying about undue changes or delays
        when reporting them.
      </li>
    </ul>
    <p>Extra problems I solve here:</p>
    <ul>
      <li>
        We created a “control tower”, a screen where some analysts can see all
        the alerts of all the themes about all the trips running at this moment,
        very inspired by the airport screens, soon I'll bring it here.
      </li>
      <li>
        I created an easy way for partners to send toll statements to receive
        refunds outside of their original invoice, this process generated an
        average of 180K in savings for the company.
      </li>
      <li>
        I started to creaete a new easy flow to solve the update, remove and
        adapt process, every bus need to update your radar and other equipments.
        flow link
      </li>
    </ul>
    <p>
      So, I created so many things that improve other parts of all intern system
      but a thing I brought the most important is this incident and refund
      solution.
    </p>
  </>
);

export default UnpublicOne;
