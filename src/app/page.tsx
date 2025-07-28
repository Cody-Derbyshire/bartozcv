import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import Marquee from "react-fast-marquee";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <body className="blue-bg">
      <main className="container relative mx-auto scroll-my-12 overflow-auto bg-transparent p-4 text-white  print:p-0 md:p-16">
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-transparent text-white print:space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="pb-2 text-2xl font-black print:text-2xl print:text-neutral-600">
                {RESUME_DATA.name}
              </h1>
              <p className="max-w-md text-pretty text-sm font-black text-muted-foreground print:text-neutral-600">
                {RESUME_DATA.about}
              </p>
              <p className="max-w-md text-pretty text-sm font-black text-muted-foreground print:text-neutral-600">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.personalWebsiteUrl}
                  target="_blank"
                >
                  {RESUME_DATA.personalWebsiteUrl}
                </a>
              </p>
              <p className="max-w-md items-center text-pretty text-xs font-black text-muted-foreground print:text-neutral-600">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <div className="blue-text flex gap-x-1 pt-1 text-sm font-black print:hidden">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${RESUME_DATA.contact.tel}`}>
                      <PhoneIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url}>
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <div className="blue-text hidden flex-col gap-x-1 text-sm font-black print:flex print:text-neutral-600">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">
                      {RESUME_DATA.contact.email}
                    </span>
                  </a>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <span className="underline">{RESUME_DATA.contact.tel}</span>
                  </a>
                ) : null}
              </div>
            </div>

            <Avatar className="size-28">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
          <Section className="print:hidden">
            <Marquee autoFill={true}>
              <div className="flex gap-0">
                {RESUME_DATA.skills.map((skill) => {
                  return (
                    <Badge /* variant={"secondary"} */ key={skill}>
                      {skill}
                    </Badge>
                  );
                })}
              </div>
            </Marquee>
          </Section>
          <Section>
            <p className="text-pretty text-sm font-black italic text-muted-foreground print:text-neutral-600">
              {RESUME_DATA.quote}
            </p>
          </Section>
          <Section>
            <h2 className="text-xl font-black print:text-neutral-600">About</h2>
            <p className="text-pretty text-sm font-black text-muted-foreground print:text-neutral-600">
              {RESUME_DATA.summary}
            </p>
          </Section>
          <Section>
            <h2 className="text-xl font-black print:text-neutral-600">
              Career Objective
            </h2>
            <p className="text-pretty text-sm font-black text-muted-foreground print:text-neutral-600">
              {RESUME_DATA.careerObjective}
            </p>
          </Section>
          <Section>
            <h2 className="text-xl font-black print:text-neutral-600">Work</h2>
            {RESUME_DATA.work.map((work) => {
              return (
                <Card
                  key={work.company}
                  className="text-white print:text-neutral-600"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="font-semiblack inline-flex items-center justify-center gap-x-1 leading-none">
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>
                      </h3>
                      <div className="text-sm tabular-nums text-white print:text-neutral-600">
                        {work.start} - {work.end}
                      </div>
                    </div>

                    <h4 className="text-sm font-black leading-none print:text-neutral-600">
                      {work.title}
                    </h4>
                  </CardHeader>
                  <CardContent className="mt-2 text-xs print:text-neutral-600">
                    {work.description}
                  </CardContent>
                  <CardContent className="mt-2 text-xs print:text-neutral-600">
                    {work.achievements}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
          <Section className="print:text-neutral-600">
            <h2 className="text-xl font-black print:text-neutral-600">
              Education
            </h2>
            {RESUME_DATA.education.map((education) => {
              return (
                <Card key={education.school} className="print:text-neutral-600">
                  <CardHeader className="print:text-neutral-600">
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <div className="flex gap-2">
                        <h3 className="font-black leading-none text-white print:text-neutral-600">
                          {education.school}
                        </h3>
                      </div>
                      <div className="text-sm font-black tabular-nums text-white print:text-neutral-600">
                        {education.start} - {education.end}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2 font-black print:text-neutral-600">
                    {education.degree}
                  </CardContent>
                  <CardContent className="mt-2 text-xs font-black italic print:text-neutral-600">
                    {education.placement}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
          <Section>
            <h2 className="text-xl font-black print:text-neutral-600">
              Skills
            </h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.skills.map((skill) => {
                return (
                  <Badge className="print:text-neutral-600" key={skill}>
                    {skill}
                  </Badge>
                );
              })}
            </div>
          </Section>

          <Section>
            <h2 className="text-xl font-black print:text-neutral-600">
              Interests
            </h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.interests.map((interest) => {
                return (
                  <Badge className="print:text-neutral-600" key={interest}>
                    {interest}
                  </Badge>
                );
              })}
            </div>
          </Section>
          <Section>
            <h2 className="text-xl font-black print:text-neutral-600">
              References
            </h2>
            <div className="flex flex-row flex-wrap gap-2">
              {RESUME_DATA.references.map((reference) => {
                return (
                  <Card
                    key={reference.name}
                    className="w-full max-w-xs print:text-neutral-600"
                  >
                    <CardHeader>
                      <h3 className="font-black leading-none text-white print:text-neutral-600">
                        {reference.name}
                      </h3>
                      <p className="text-xs font-black italic text-muted-foreground print:text-neutral-600">
                        {reference.title}
                      </p>
                    </CardHeader>
                    <CardContent className="mt-2 text-sm print:text-neutral-600">
                      {reference.email}
                    </CardContent>
                    <CardContent className="mt-2 text-sm print:text-neutral-600">
                      {reference.tel}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Section>
          {/* <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-black">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section> */}
        </section>

        <CommandMenu
          links={[
            {
              url: RESUME_DATA.personalWebsiteUrl,
              title: "Personal Website",
            },
            ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
              url: socialMediaLink.url,
              title: socialMediaLink.name,
            })),
          ]}
        />
      </main>
    </body>
  );
}
