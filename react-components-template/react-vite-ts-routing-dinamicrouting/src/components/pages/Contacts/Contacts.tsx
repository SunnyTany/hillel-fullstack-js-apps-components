import Menu from '../../common/Menu/Menu'

const Contacts = () => {
  return (
    <div className="container">
      <Menu/>
      <h1>Contacts Page</h1>
      <div>Prague, Czech Republic, 14800</div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163932.3953459519!2d14.153824638606899!3d50.05925204928352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2z0J_RgNCw0LPQsA!5e0!3m2!1sru!2scz!4v1711362640076!5m2!1sru!2scz" width="800" height="600"   loading="lazy" ></iframe>
    </div>
  )
}

export default Contacts