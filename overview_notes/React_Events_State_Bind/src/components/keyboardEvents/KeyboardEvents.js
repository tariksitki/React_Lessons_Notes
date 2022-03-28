import "./KeyBoardEvents.css";

  // Kullanicinin kopyalama kesme yapistirma yapmasini
  // komple engellemek icin css dosyasinda bulunan kodu kullanabiliriz

const KeyboardEvents = () => {
  // keyDown
  const handleKeyDown = (e) => {
    console.log(e.type);
    console.log(e.key);
    console.log(e.code);
    // Güzel bir kullanim: kullanici su tusa basti ise sunu yap
    // (e.keyCode == 13) && (alert("Formunuz Submit Olmustur"));
    e.key == "Enter" && alert("Formunuz Submit Olmustur");
  };

  //keyUp
  // elimizi kaldirdigimizda
  const handleKeyUp = function (e) {
    return console.log(e.key);
  };

  // cut event
  const handleCut = () => alert("Don't Cut my Content");

  // paste event
  const handlePaste = () => alert("Dont't Paste over my Content");

  // copy
  const handleCopy = () => alert("Dont't Copy my Content");

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>KeyboardEvents</h2>
      {/* <input type="text" onKeyDown={handleKeyDown} /> */}
      <input type="text" onKeyUp={handleKeyUp} />

      <p
        className="textP"
        onCopy={handleCopy}
        onCut={handleCut}
        onPaste={handlePaste}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default KeyboardEvents;
