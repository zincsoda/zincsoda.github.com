export default function Bio() {
  return (
    <div className="page">
      <header className="page-header" />
      <article className="page-content">
        <h2>Professional Bio</h2>
        <p>
          Currently, I'm the CTO of <a href="https://smartretail.co/" target="_blank" rel="noopener noreferrer">SmartRetail</a>, where we are building an 
          edge-based computer vision platform that measures people flows and audience metrics for out-of-home 
          retail and advertising.
        </p>
        <p>
          Before that, I was Head of Software at <a href="https://nixplay.com/" target="_blank" rel="noopener noreferrer">Nixplay</a>. This was a masterclass in building lovable products — 
          I had the privilege of leading a talented team of engineers, designers, and QA specialists to build 
          the software powering Nixplay's global fleet of digital photo frames.
        </p>

        <p>
          My journey to Hong Kong started in the UK, where I served as CTO for a startup called Secure Broadcast 
          (now <a href="https://www.vmltechnology.com/" target="_blank" rel="noopener noreferrer">VML Technologies.</a>). But my roots are in deep, low-level 
          engineering. Earlier in my career, I was a senior researcher at SAP working on the 
          <a href="https://www.saphana.com/community/about-hana/deployment-options/sap-hana-enterprise-cloud" target="_blank" rel="noopener noreferrer">HANA Enterprise Cloud</a>, 
          and I spent time researching and <a href="https://www.blopeur.com/benoithudzia.html#project-and-codes" target="_blank" rel="noopener noreferrer">contributing</a> to Qemu/KVM, 
          the Linux Kernel, and OpenStack.
          contributing to Qemu/KVM, the Linux Kernel, and OpenStack. I've also spent time building high-stakes 
          trading technology for <a href="https://www.nyse.com/technology" target="_blank" rel="noopener noreferrer">NYSE Technologies</a> and IP video 
          streaming solutions for <a href="https://www.americandynamics.net/Products/VideoEdge_NVR" target="_blank" rel="noopener noreferrer">Tyco - American Dynamics</a>.
        </p>

        <br />
        <h2>Full Bio</h2>
        <p>
          <a href="https://docs.google.com/document/d/e/2PACX-1vRKGULdMHIB3rxHw-87Tl9TQ3KaqUha0oNTijZJn3g9shOCHxvlqorEfAKOsJ2_Ic0sDe0TyvLzwII3/pub" target="_blank" rel="noopener noreferrer">Latest CV</a>
        </p>
        <br />
        <h2>Patents</h2>
        <p>
          <strong>Digital Media Frame and Method for Configuring a Field of View</strong>
          <br />
          Nixplay • US Patent 20210352206 (Issued Nov 2021) • Lead Inventor
          <br />
          Authored the full patent for a method to dynamically adjust media display based on user proximity and viewing angles, optimizing the "living room" experience.
        </p>
        <p>
          <strong>Video Broadcast System and Method of Disseminating Video Content</strong>
          <br />
          Secure Broadcast • US Patent 10735798B2 (Issued Aug 2020) • System Architect
          <br />
          Designed the core technical architecture and drafted the technical filing for a secure, mobile-first video dissemination system used by enterprise clients.
        </p>
        <p>
          <strong>Cloud-Enabled Distributed System with Virtual Machine Checkpointing</strong>
          <br />
          SAP • Co-Inventor
          <br />
          Developed high-availability mechanisms for distributed cloud environments, ensuring system resilience and data integrity during failures.
        </p>
      </article>
    </div>
  )
}
