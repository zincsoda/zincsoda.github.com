export default function Home() {
  return (
    <div className="page">
      <header className="page-header" />
      <article className="page-content">
        <p>
          <img src="/images/steve.jpg" className="headshot" alt="Steve Walsh" />
        </p>
        <p>
          Hi there, I'm a software developer living in Hong Kong with an Irish accent.
        </p>
        <p>
          I'm married to a woman who still catches my breath every day and keeps me right in every way.{' '}
          <a href="https://sw-public-01.s3.eu-west-1.amazonaws.com/aeddaed8-71cd-4ec2-ad23-aabef210fd30.jpg">We</a>{' '}
          have been gifted with three amazing kids who keep life full to the max and bring us tremendous joy.
        </p>
        <p>
          This site is primarily a playground for me to host various bits I find interesting and test some bits and pieces.
        </p>
      </article>
    </div>
  )
}
