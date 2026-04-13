import { map } from "lodash";
import { Experience } from "../../model/experience";
import { Card } from "../card/card";
import { PiBriefcase as _PiBriefcase } from "react-icons/pi";
const PiBriefcase = _PiBriefcase as any;
interface ExperienceCardProps {
  Experience: Experience;
}
export const ExperienceCard = ({
  Experience: { companyName, period, projects },
}: ExperienceCardProps) => {
  return (
    <Card>
      <div className="flex items-center gap-2 font-medium relative">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 absolute -left-[23px] border-2 border-[#7f8c8d]">
          <PiBriefcase />
        </div>
        <div className="relative left-4">
          <span>{period}</span>
          <span>:&nbsp;</span>
          <span>{companyName}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {map(projects, ({ name, description, role, teamSize, technology }) => {
          return (
            <>
              <div>
                <div className="font-medium">
                  <span>Project:&nbsp;</span>
                  <span>{name}</span>
                </div>
                <div>
                  <span className="font-medium">Description:&nbsp;</span>
                  <span>{description}</span>
                </div>
                {teamSize && (
                  <div>
                    <span className="font-medium">Team Size:&nbsp;</span>
                    <span>{teamSize}</span>
                  </div>
                )}
                {role && (
                  <div>
                    <span className="font-medium">
                      Role/Responsibilities:&nbsp;
                    </span>
                    <span>{role}</span>
                  </div>
                )}
                {technology && (
                  <div>
                    <span className="font-medium">Technology:&nbsp;</span>
                    <span>{technology}</span>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>
    </Card>
  );
};
