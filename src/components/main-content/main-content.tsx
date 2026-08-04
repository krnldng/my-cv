import { each, filter, map } from "lodash";
import { Section } from "../section/section";
import { ExperienceCard } from "../experience-card/experience-card";
import { experiences } from "../experience-card/experiences";
import tieIconUrl from "../../assets/tie.png";
import informationIconUrl from "../../assets/information.png";
import badgeIconUrl from "../../assets/badge.png";
import graduateCapIconUrl from "../../assets/graduation-cap.png";
import certificateIconUrl from "../../assets/certificate.png";
import recommendationIconUrl from "../../assets/star.png";
import languageIconUrl from "../../assets/language.png";
import gearIconUrl from "../../assets/gear.png";
import ibmBlockchainIconUrl from "../../assets/ibm_blockchain.png";
import contactIconUrl from "../../assets/contact.png";
import { Card } from "../card/card";
import { ProgressBar } from "../progress-bar/progress-bar";
import { Circle } from "../circle/circle";
import { Contact } from "../contact/contact";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";

export const MainContent = () => {
  const [inPropForProgressBars, setInPropForProgressBars] = useState(false);
  const [inPropForTechnologyCircles, setInPropForTechnologyCircles] =
    useState(false);
  const [inPropForProgrammingCircles, setInPropForProgrammingCircles] =
    useState(false);
  const technologyCirclesRef = useRef<HTMLDivElement>(null);
  const programmingCirclesRef = useRef<HTMLDivElement>(null);
  const progressBarsRef = useRef<HTMLDivElement>(null);
  const intersectionObserver = useMemo(
    () =>
      new IntersectionObserver(
        (entries) => {
          each(entries, (entry) => {
            if (entry.isIntersecting) {
              if (entry.target === progressBarsRef.current) {
                setInPropForProgressBars(true);
              }
              if (entry.target === technologyCirclesRef.current) {
                setInPropForTechnologyCircles(true);
              }
              if (entry.target === programmingCirclesRef.current) {
                setInPropForProgrammingCircles(true);
              }
            }
          });
        },
        {
          root: null,
          threshold: 0.1,
        },
      ),
    [],
  );

  useEffect(() => {
    if (progressBarsRef.current) {
      intersectionObserver.observe(progressBarsRef.current);
    }
  }, [progressBarsRef.current]);

  useEffect(() => {
    if (programmingCirclesRef.current) {
      intersectionObserver.observe(programmingCirclesRef.current);
    }
  }, [programmingCirclesRef.current]);

  useEffect(() => {
    if (technologyCirclesRef.current) {
      intersectionObserver.observe(technologyCirclesRef.current);
    }
  }, [technologyCirclesRef.current]);

  return (
    <div className="flex flex-row mt-5">
      {/* left side */}
      <div className="flex flex-col gap-4 bg-[#f5f7f8aa;] p-4">
        <Section title="About me" iconUrl={informationIconUrl}>
          <div className="text-left">
            I graduated from the University of Information Technology with a
            major in Software Engineering. Since then, I have worked across
            various domains, including oil and gas, healthcare, hospitality,
            multimedia processing, and digital transformation for enterprises.
            <br></br>
            My core competencies encompass .NET (C#), TypeScript, ReactJS,
            Angular, SQL, and the Azure cloud platform, complemented by strong
            analytical thinking, problem-solving, and performance optimization
            skills. I am committed to mentoring and knowledge sharing, and to
            delivering high-quality products while remaining current with
            emerging technology trends. I am presently pursuing a Master's
            degree in Software Engineering with a specialization in Artificial
            Intelligence, in order to establish the theoretical foundation and
            practical expertise required to apply AI across industry domains.
          </div>
        </Section>
        <Section title="Education" iconUrl={graduateCapIconUrl}>
          <div className="flex flex-row gap-4 text-left">
            <div className="flex flex-col gap-4">
              <Card>
                <div className="flex flex-col">
                  <div className="font-semibold">
                    12/2025 - 2027: Studying Master of Software Engineering in
                    AI
                  </div>
                  <div className="font-medium">
                    FPT School of Business and Technology - FPT University
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex flex-col">
                  <div className="font-semibold">
                    2012 - 2017: Studying software engineering
                  </div>
                  <div className="font-medium">
                    University Of Information Technology
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex flex-col">
                  <div className="font-semibold">
                    2009 - 2012: Studying specialized math
                  </div>
                  <div className="font-medium">Le Khiet Specialized School</div>
                </div>
              </Card>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-2">
                <img src={badgeIconUrl} className="size-6"></img>
                <span>VNG Scholarship 2015</span>
              </div>
              <div className="flex flex-row gap-2">
                <img src={badgeIconUrl} className="size-6"></img>
                <span>Second prize in school-level chess</span>
              </div>
              <div className="flex flex-row gap-2">
                <img src={badgeIconUrl} className="size-6"></img>
                <span>Top 1 of entrance examination 2012 of UIT</span>
              </div>
            </div>
          </div>
        </Section>
        <Section title="Experience" iconUrl={tieIconUrl}>
          <div className="flex flex-col gap-4">
            {map(
              filter(experiences, (i) => !i.hidden),
              (experience) => {
                return (
                  <ExperienceCard Experience={experience}></ExperienceCard>
                );
              },
            )}
          </div>
        </Section>
      </div>
      {/* right side */}
      <div className="flex flex-col gap-4 p-4 min-w-[250px] w-[250px]">
        <Section title="Contact" iconUrl={contactIconUrl}>
          <Contact></Contact>
        </Section>
        <Section title="Skills" iconUrl={gearIconUrl}>
          <div className="text-center">- Programming -</div>
          <div
            className="relative"
            style={{ height: 210 }}
            ref={programmingCirclesRef}
          >
            <Circle
              radius={60}
              title="C#/C++"
              className="absolute"
              style={{ top: 30, left: 40 }}
              inProp={inPropForProgrammingCircles}
            ></Circle>
            <Circle
              radius={35}
              title="Python"
              className="absolute"
              style={{ top: 20, left: 0 }}
              inProp={inPropForProgrammingCircles}
            ></Circle>
            <Circle
              radius={50}
              title="JS/TS"
              className="absolute"
              style={{ top: 10, left: 120 }}
              inProp={inPropForProgrammingCircles}
            ></Circle>
            <Circle
              radius={40}
              title="HTML/CSS"
              className="absolute"
              style={{ top: 100, left: 20 }}
              inProp={inPropForProgrammingCircles}
            ></Circle>
            <Circle
              radius={35}
              title="SQL"
              className="absolute"
              style={{ top: 120, left: 100 }}
              inProp={inPropForProgrammingCircles}
            ></Circle>
          </div>
          <div className="text-center">- Technology & Architecture -</div>
          <div
            className="relative"
            style={{ height: 230 }}
            ref={technologyCirclesRef}
          >
            <Circle
              radius={60}
              title=".NET"
              className="absolute"
              style={{ top: 30, left: 60 }}
              inProp={inPropForTechnologyCircles}
            ></Circle>
            <Circle
              radius={50}
              title={
                (
                  <div className="flex flex-col justify-center">
                    <span>Android</span>
                    <span>Ionic</span>
                    <span>React Native</span>
                    <span>Xamarin</span>
                  </div>
                ) as any
              }
              className="absolute"
              style={{ top: 10, left: 0 }}
              inProp={inPropForTechnologyCircles}
            ></Circle>
            <Circle
              radius={40}
              title={
                (
                  <div>
                    <span>MVVM</span>
                    <br></br>
                    <span>MVC</span>
                  </div>
                ) as any
              }
              className="absolute"
              style={{ top: 10, left: 130 }}
              inProp={inPropForTechnologyCircles}
            ></Circle>
            <Circle
              radius={30}
              title="SOLID"
              className="absolute"
              style={{ top: 100, left: 30 }}
              inProp={inPropForTechnologyCircles}
            ></Circle>
            <Circle
              radius={40}
              title="Django"
              className="absolute"
              style={{ top: 140, left: 60 }}
              inProp={inPropForTechnologyCircles}
            ></Circle>
            <Circle
              radius={50}
              title="React/Preact"
              className="absolute"
              style={{ top: 80, left: 120 }}
              inProp={inPropForTechnologyCircles}
            ></Circle>
          </div>
        </Section>
        <Section title="Foreign Languages" iconUrl={languageIconUrl}>
          <div className="text-left">
            <div className="font-medium">English</div>
            <div
              className="grid grid-cols-[auto_1fr] gap-1"
              ref={progressBarsRef}
            >
              <div>Reading</div>
              <ProgressBar
                percent={90}
                inProp={inPropForProgressBars}
              ></ProgressBar>
              <div>Writing</div>
              <ProgressBar
                percent={80}
                inProp={inPropForProgressBars}
              ></ProgressBar>
              <div>Listening</div>
              <ProgressBar
                percent={70}
                inProp={inPropForProgressBars}
              ></ProgressBar>
              <div>Speaking</div>
              <ProgressBar
                percent={70}
                inProp={inPropForProgressBars}
              ></ProgressBar>
            </div>
          </div>
        </Section>
        <Section title="Recommendation" iconUrl={recommendationIconUrl}>
          <div className="text-left">
            <div className="flex flex-row gap-2 items-center">
              <div className="shrink-0 rounded-full size-14 bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-lg font-semibold text-white shadow-sm">
                NH
              </div>
              <div className="flex flex-col items-start">
                <span className="font-medium">Nguyen Hoang</span>
                <span className="text-sm text-[#000000e6]">
                  Development Manager at Restaff/House Of Norway
                </span>
              </div>
            </div>
            <div className={"mt-2 text-sm"}>
              Nhan’s dedication to his work is commendable. He consistently goes
              above and beyond to deliver high-quality results. As a mentor,
              Nhan invests time in guiding new team members, helping them grow
              both technically and professionally.<br></br> His combination of
              technical expertise, collaborative mindset, and unwavering
              dedication makes him an invaluable team member. I wholeheartedly
              recommend Nhan for any role that requires harmony among technical
              skill, analytical thinking, teamwork, and commitment. &nbsp;
              <a
                href="https://www.linkedin.com/in/kernel-dang/#recommendations"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                See more
              </a>
            </div>
          </div>
        </Section>
        <Section title="Other Certificates" iconUrl={certificateIconUrl}>
          <div className="flex flex-row gap-2 items-center text-left">
            <img src={ibmBlockchainIconUrl} class="size-14"></img>
            <span className="font-medium">IBM Blockchain Essential</span>
          </div>
        </Section>
      </div>
    </div>
  );
};
