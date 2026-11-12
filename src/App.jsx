import academyContent from "./content/academy_overview.txt?raw";
import aboutContent from "./content/about_cristi.txt?raw";
import lessonsContent from "./content/lesson_structure.txt?raw";
import methodContent from "./content/teaching_method.txt?raw";
import journeyContent from "./content/student_journey.txt?raw";
import testimonialsContent from "./content/testimonials.txt?raw";
import pricingContent from "./content/pricing.txt?raw";
import faqContent from "./content/faq.txt?raw";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Academy from "./components/Academy";
import AboutTeacher from "./components/AboutTeacher";
import Lessons from "./components/Lessons";
import Method from "./components/Method";
import Journey from "./components/Journey";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Music from "./components/Music";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const websiteContent = {
    academy: academyContent,
    about: aboutContent,
    lessons: lessonsContent,
    method: methodContent,
    journey: journeyContent,
    testimonials: testimonialsContent,
    pricing: pricingContent,
    faq: faqContent,
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const parseSections = (text) => {
    if (!text) return [];

    const lines = text.split("\n").map((line) => line.trim());

    const sections = [];

    let currentSection = null;

    lines.forEach((line) => {
      if (!line) return;

      const isHeading =
        line === line.toUpperCase() && line.length > 3 && !line.startsWith("-");

      if (isHeading) {
        if (currentSection) {
          sections.push(currentSection);
        }

        currentSection = {
          title: line,
          paragraphs: [],
          items: [],
        };

        return;
      }

      if (!currentSection) {
        currentSection = {
          title: "",
          paragraphs: [],
          items: [],
        };
      }

      if (line.startsWith("-")) {
        currentSection.items.push(line.replace(/^-\s*/, ""));
      } else {
        currentSection.paragraphs.push(line);
      }
    });

    if (currentSection) {
      sections.push(currentSection);
    }

    return sections;
  };

  const formatHeading = (heading) => {
    const text = heading.toLowerCase().trim();

    if (!text) return "";

    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const formatTestimonialHeading = (heading) => {
    return heading
      .toLowerCase()
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const renderWhyTga = (section) => {
    return (
      <div className="why-tga">
        <div className="why-tga-grid">
          {section.items.map((item, index) => (
            <div className="why-tga-card" key={index}>
              <div className="why-tga-icon">✓</div>

              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderGenericSection = (section, index) => {
    return (
      <article className="content-block" key={index}>
        {section.title && <h3>{formatHeading(section.title)}</h3>}

        {section.paragraphs.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex}>{paragraph}</p>
        ))}

        {section.items.length > 0 && (
          <ul>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        )}
      </article>
    );
  };

  const academySections = parseSections(websiteContent?.academy || "");

  const aboutSections = parseSections(websiteContent?.about || "");

  const lessonSections = parseSections(websiteContent?.lessons || "");

  const methodSections = parseSections(websiteContent?.method || "");

  const journeySections = parseSections(websiteContent?.journey || "");

  const testimonialSections = parseSections(websiteContent?.testimonials || "");

  const pricingSections = parseSections(websiteContent?.pricing || "");

  const faqSections = parseSections(websiteContent?.faq || "");

  const academyStats = [
    {
      value: "30+",
      label: "ani de experiență ca chitarist",
    },
    {
      value: "8+",
      label: "ani de experiență ca profesor",
    },
    {
      value: "50+",
      label: "elevi de vârste și niveluri diferite",
    },
    {
      value: "100%",
      label: "lecții individuale",
    },
  ];

  return (
    <div className="site">
      <Navbar scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Academy
        academySections={academySections}
        academyStats={academyStats}
        renderWhyTga={renderWhyTga}
        renderGenericSection={renderGenericSection}
      />
      <AboutTeacher aboutSections={aboutSections} />
      <Music />
      <Lessons lessonSections={lessonSections} />
      <Method methodSections={methodSections} formatHeading={formatHeading} />
      <Journey
        journeySections={journeySections}
        formatHeading={formatHeading}
      />
      <Testimonials
        testimonialSections={testimonialSections}
        formatTestimonialHeading={formatTestimonialHeading}
      />
      <Pricing pricingSections={pricingSections} />
      <FAQ faqSections={faqSections} formatHeading={formatHeading} />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
