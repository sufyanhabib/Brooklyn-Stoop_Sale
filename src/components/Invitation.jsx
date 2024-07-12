import './invitation.css'

const Invitation = () => {
  return (
    <div className="dateEmbed">
      <h3>you&apos;re invited! 💌</h3>
      <h3>join us on saturday, july 27 @ 11 a.m. - 3 p.m. at court st. &amp; 2nd pl.</h3>
      <div className="mapEmbed">
        <iframe
          id="googleMap"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3025.7485061009097!2d-74.00020842373941!3d40.6795099630568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQwJzQ2LjIiTiA3M8KwNTknNTAuMiJX!5e0!3m2!1sen!2sus!4v1720717653589!5m2!1sen!2sus"
          height="450"
          width="90%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      <button id="invitation-button" type="button">
        click here to add to your calendar!
      </button>
    </div>
  );
};

export default Invitation;
