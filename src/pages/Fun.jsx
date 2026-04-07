export default function Fun() {
  return (
    <div className="page">
      <header className="page-header" />
      <article className="page-content">
        <h2>Apps</h2>
        <h3>Hanzi Journey</h3>
        <p>
          A PWA for learning Chinese characters. <a href="https://steve-walsh.com/hanzi-journey">Hanzi Journey.</a>
        </p>
        <h3>Font Board</h3>
        <p>
          My son and I built this App in React Native. It was developed in an afternoon and pushed to app and play store on the same day.
        </p>
        <ul>
          <li><a href="https://apps.apple.com/gd/app/font-board/id1517838592">App Store</a></li>
          <li><a href="https://play.google.com/store/apps/details?id=com.fontboard">Play Store</a></li>
        </ul>
        <p>Usage is low but it was a fun afternoon.</p>
        <br /><br />
        <h2>Talks</h2>
        <h3>Python game development for beginners.</h3>
        <p>
          I did a workshop for kids aged 6 - 10 (April 2017) where we learned to build a clone of the game 'Flappy Bird' using python.{' '}
          <a href="/flappy.html">Here are some videos which describe the workshop.</a>
        </p>
        <br /><br />
        <h3>Designing REST APIs for mobile apps.</h3>
        <p>
          I was asked to give a talk (July 2015) on building REST APIs for mobile app development for the Women Who Code meetup group in Belfast.{' '}
          <a href="/wwcode.html">Here is a video and summary of the talk.</a>
        </p>
        <br /><br />
        <h2>Code</h2>
        <p>Here are a few bits and pieces that have made it on to github.</p>
        <br />
        <ul>
          <li><a href="https://github.com/zincsoda/scoreboard">Scoreboard</a> - A simple django webapp for maintaining an office ping pong, pool, chess, table soccer, etc league.</li>
          <br />
          <li><a href="https://github.com/zincsoda/ImageCropping">Image Cropper</a> - An OSX cocoa application utility to crop images to a specified aspect ratio.</li>
          <br />
          <li>
            <a href="https://hecatonchire.com">Project Hecatonchire</a> - Working with the extraordinary <a href="https://blopeur.com">Benoit Hudzia</a>, I was heavily involved in the Hecatonchire Project during my time with SAP Research. Hecatonchire (meaning "Hundred-Handed One" in Greek Mythology) is a framework of tools (Kernel and Userspaces) aiming to provide memory, I/O and CPU resource aggregation capabilities to x86/Linux native application as well as to Linux/KVM VMs using commodity hardware and fast RDMA-enabled interconnects.
          </li>
        </ul>
      </article>
    </div>
  )
}
