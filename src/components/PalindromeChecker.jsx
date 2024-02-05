import { useState } from "react";

export default function PalindromeChecker() {
  const [text, setText] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(false);
  const [flag, setFlag] = useState(false);

  const checkPalindrome = () => {
    let preparedText = text
      .toLowerCase()
      .replaceAll(" ", "")
      .replace(/([^\w ]|_)/g, "");
    const textReversed = preparedText.split("").reverse().join("");

    if (preparedText === textReversed) {
      console.log("text === textReversed", text == textReversed);
      setIsPalindrome(true);
    } else {
      setIsPalindrome(false);
    }
  };
  const handleClick = () => {
    checkPalindrome();
    setFlag(true);
  };

  return (
    <section>
      <h2>What's a palindrome?</h2>
      <p>
        A palindrome is{" "}
        <b>
          a word, sentence, verse, or even number that reads the same backward
          or forward.
        </b>
      </p>

      <input
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={handleClick}>Check</button>

      <section>
        {text}
        {flag ? <p>Is a Palindrome? {isPalindrome ? "Yes." : "No."}</p> : ""}
      </section>
    </section>
  );
}
