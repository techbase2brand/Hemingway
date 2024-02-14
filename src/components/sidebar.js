import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

const drawerWidth = 320;
function Sidebar({ inputText,setMatchWord}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [outputText, setOutputText] = useState("");

  console.log("inputText", inputText);
  // State for text analysis results
  const [data, setData] = useState({
    paragraphs: 0,
    sentences: 0,
    wordCount: 0,
    hardSentences: 0,
    veryHardSentences: 0,
    adverbs: 0,
    passiveVoice: 0,
    complex: 0,
    letters: 0,
    characters: 0,
    readingTime: 0,
    grade: 0,
    // Include a state to store the analyzed text with HTML tags for highlighting
    highlightedText: "",
  });
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  function getQualifyingWords() {
    return {
      "i believe": 1,
      "i consider": 1,
      "i don't believe": 1,
      "i don't consider": 1,
      "i don't feel": 1,
      "i don't suggest": 1,
      "i don't think": 1,
      "i feel": 1,
      "i hope to": 1,
      "i might": 1,
      "i suggest": 1,
      "i think": 1,
      "i was wondering": 1,
      "i will try": 1,
      "i wonder": 1,
      "in my opinion": 1,
      "is kind of": 1,
      "is sort of": 1,
      just: 1,
      maybe: 1,
      perhaps: 1,
      possibly: 1,
      "we believe": 1,
      "we consider": 1,
      "we don't believe": 1,
      "we don't consider": 1,
      "we don't feel": 1,
      "we don't suggest": 1,
      "we don't think": 1,
      "we feel": 1,
      "we hope to": 1,
      "we might": 1,
      "we suggest": 1,
      "we think": 1,
      "we were wondering": 1,
      "we will try": 1,
      "we wonder": 1,
    };
  }
  function getLyWords() {
    return {
      actually: 1,
      additionally: 1,
      allegedly: 1,
      ally: 1,
      alternatively: 1,
      anomaly: 1,
      apply: 1,
      approximately: 1,
      ashely: 1,
      ashly: 1,
      assembly: 1,
      awfully: 1,
      baily: 1,
      belly: 1,
      bely: 1,
      billy: 1,
      bradly: 1,
      bristly: 1,
      bubbly: 1,
      bully: 1,
      burly: 1,
      butterfly: 1,
      carly: 1,
      charly: 1,
      chilly: 1,
      comely: 1,
      completely: 1,
      comply: 1,
      consequently: 1,
      costly: 1,
      courtly: 1,
      crinkly: 1,
      crumbly: 1,
      cuddly: 1,
      curly: 1,
      currently: 1,
      daily: 1,
      dastardly: 1,
      deadly: 1,
      deathly: 1,
      definitely: 1,
      dilly: 1,
      disorderly: 1,
      doily: 1,
      dolly: 1,
      dragonfly: 1,
      early: 1,
      elderly: 1,
      elly: 1,
      emily: 1,
      especially: 1,
      exactly: 1,
      exclusively: 1,
      family: 1,
      finally: 1,
      firefly: 1,
      folly: 1,
      friendly: 1,
      frilly: 1,
      gadfly: 1,
      gangly: 1,
      generally: 1,
      ghastly: 1,
      giggly: 1,
      globally: 1,
      goodly: 1,
      gravelly: 1,
      grisly: 1,
      gully: 1,
      haily: 1,
      hally: 1,
      harly: 1,
      hardly: 1,
      heavenly: 1,
      hillbilly: 1,
      hilly: 1,
      holly: 1,
      holy: 1,
      homely: 1,
      homily: 1,
      horsefly: 1,
      hourly: 1,
      immediately: 1,
      instinctively: 1,
      imply: 1,
      italy: 1,
      jelly: 1,
      jiggly: 1,
      jilly: 1,
      jolly: 1,
      july: 1,
      karly: 1,
      kelly: 1,
      kindly: 1,
      lately: 1,
      likely: 1,
      lilly: 1,
      lily: 1,
      lively: 1,
      lolly: 1,
      lonely: 1,
      lovely: 1,
      lowly: 1,
      luckily: 1,
      mealy: 1,
      measly: 1,
      melancholy: 1,
      mentally: 1,
      molly: 1,
      monopoly: 1,
      monthly: 1,
      multiply: 1,
      nightly: 1,
      oily: 1,
      only: 1,
      orderly: 1,
      panoply: 1,
      particularly: 1,
      partly: 1,
      paully: 1,
      pearly: 1,
      pebbly: 1,
      polly: 1,
      potbelly: 1,
      presumably: 1,
      previously: 1,
      pualy: 1,
      quarterly: 1,
      rally: 1,
      rarely: 1,
      recently: 1,
      rely: 1,
      reply: 1,
      reportedly: 1,
      roughly: 1,
      sally: 1,
      scaly: 1,
      shapely: 1,
      shelly: 1,
      shirly: 1,
      shortly: 1,
      sickly: 1,
      silly: 1,
      sly: 1,
      smelly: 1,
      sparkly: 1,
      spindly: 1,
      spritely: 1,
      squiggly: 1,
      stately: 1,
      steely: 1,
      supply: 1,
      surly: 1,
      tally: 1,
      timely: 1,
      trolly: 1,
      ugly: 1,
      underbelly: 1,
      unfortunately: 1,
      unholy: 1,
      unlikely: 1,
      usually: 1,
      waverly: 1,
      weekly: 1,
      wholly: 1,
      willy: 1,
      wily: 1,
      wobbly: 1,
      wooly: 1,
      worldly: 1,
      wrinkly: 1,
      yearly: 1,
    };
  }
console.log("getLyWords",getLyWords)
  function getComplexWords() {
    return {
      "a number of": ["many", "some"],
      abundance: ["enough", "plenty"],
      "accede to": ["allow", "agree to"],
      accelerate: ["speed up"],
      accentuate: ["stress"],
      accompany: ["go with", "with"],
      accomplish: ["do"],
      accorded: ["given"],
      accrue: ["add", "gain"],
      acquiesce: ["agree"],
      acquire: ["get"],
      additional: ["more", "extra"],
      "adjacent to": ["next to"],
      adjustment: ["change"],
      admissible: ["allowed", "accepted"],
      advantageous: ["helpful"],
      "adversely impact": ["hurt"],
      advise: ["tell"],
      aforementioned: ["remove"],
      aggregate: ["total", "add"],
      aircraft: ["plane"],
      "all of": ["all"],
      alleviate: ["ease", "reduce"],
      allocate: ["divide"],
      "along the lines of": ["like", "as in"],
      "already existing": ["existing"],
      alternatively: ["or"],
      ameliorate: ["improve", "help"],
      anticipate: ["expect"],
      apparent: ["clear", "plain"],
      appreciable: ["many"],
      "as a means of": ["to"],
      "as of yet": ["yet"],
      "as to": ["on", "about"],
      "as yet": ["yet"],
      ascertain: ["find out", "learn"],
      assistance: ["help"],
      "at this time": ["now"],
      attain: ["meet"],
      "attributable to": ["because"],
      authorize: ["allow", "let"],
      "because of the fact that": ["because"],
      belated: ["late"],
      "benefit from": ["enjoy"],
      bestow: ["give", "award"],
      "by virtue of": ["by", "under"],
      cease: ["stop"],
      "close proximity": ["near"],
      commence: ["begin or start"],
      "comply with": ["follow"],
      concerning: ["about", "on"],
      consequently: ["so"],
      consolidate: ["join", "merge"],
      constitutes: ["is", "forms", "makes up"],
      demonstrate: ["prove", "show"],
      depart: ["leave", "go"],
      designate: ["choose", "name"],
      discontinue: ["drop", "stop"],
      "due to the fact that": ["because", "since"],
      "each and every": ["each"],
      economical: ["cheap"],
      eliminate: ["cut", "drop", "end"],
      elucidate: ["explain"],
      employ: ["use"],
      endeavor: ["try"],
      enumerate: ["count"],
      equitable: ["fair"],
      equivalent: ["equal"],
      evaluate: ["test", "check"],
      evidenced: ["showed"],
      exclusively: ["only"],
      expedite: ["hurry"],
      expend: ["spend"],
      expiration: ["end"],
      facilitate: ["ease", "help"],
      "factual evidence": ["facts", "evidence"],
      feasible: ["workable"],
      finalize: ["complete", "finish"],
      "first and foremost": ["first"],
      "for the purpose of": ["to"],
      forfeit: ["lose", "give up"],
      formulate: ["plan"],
      "honest truth": ["truth"],
      however: ["but", "yet"],
      "if and when": ["if", "when"],
      impacted: ["affected", "harmed", "changed"],
      implement: ["install", "put in place", "tool"],
      "in a timely manner": ["on time"],
      "in accordance with": ["by", "under"],
      "in addition": ["also", "besides", "too"],
      "in all likelihood": ["probably"],
      "in an effort to": ["to"],
      "in between": ["between"],
      "in excess of": ["more than"],
      "in lieu of": ["instead"],
      "in light of the fact that": ["because"],
      "in many cases": ["often"],
      "in order to": ["to"],
      "in regard to": ["about", "concerning", "on"],
      "in some instances ": ["sometimes"],
      "in terms of": ["omit"],
      "in the near future": ["soon"],
      "in the process of": ["omit"],
      inception: ["start"],
      "incumbent upon": ["must"],
      indicate: ["say", "state", "or show"],
      indication: ["sign"],
      initiate: ["start"],
      "is applicable to": ["applies to"],
      "is authorized to": ["may"],
      "is responsible for": ["handles"],
      "it is essential": ["must", "need to"],
      literally: ["omit"],
      magnitude: ["size"],
      maximum: ["greatest", "largest", "most"],
      methodology: ["method"],
      minimize: ["cut"],
      minimum: ["least", "smallest", "small"],
      modify: ["change"],
      monitor: ["check", "watch", "track"],
      multiple: ["many"],
      necessitate: ["cause", "need"],
      nevertheless: ["still", "besides", "even so"],
      "not certain": ["uncertain"],
      "not many": ["few"],
      "not often": ["rarely"],
      "not unless": ["only if"],
      "not unlike": ["similar", "alike"],
      notwithstanding: ["in spite of", "still"],
      "null and void": ["use either null or void"],
      numerous: ["many"],
      objective: ["aim", "goal"],
      obligate: ["bind", "compel"],
      obtain: ["get"],
      "on the contrary": ["but", "so"],
      "on the other hand": ["omit", "but", "so"],
      "one particular": ["one"],
      optimum: ["best", "greatest", "most"],
      overall: ["omit"],
      "owing to the fact that": ["because", "since"],
      participate: ["take part"],
      particulars: ["details"],
      "pass away": ["die"],
      "pertaining to": ["about", "of", "on"],
      "point in time": ["time", "point", "moment", "now"],
      portion: ["part"],
      possess: ["have", "own"],
      preclude: ["prevent"],
      previously: ["before"],
      "prior to": ["before"],
      prioritize: ["rank", "focus on"],
      procure: ["buy", "get"],
      proficiency: ["skill"],
      "provided that": ["if"],
      purchase: ["buy", "sale"],
      "put simply": ["omit"],
      "readily apparent": ["clear"],
      "refer back": ["refer"],
      regarding: ["about", "of", "on"],
      relocate: ["move"],
      remainder: ["rest"],
      remuneration: ["payment"],
      require: ["must", "need"],
      requirement: ["need", "rule"],
      reside: ["live"],
      residence: ["house"],
      retain: ["keep"],
      satisfy: ["meet", "please"],
      shall: ["must", "will"],
      "should you wish": ["if you want"],
      "similar to": ["like"],
      solicit: ["ask for", "request"],
      "span across": ["span", "cross"],
      strategize: ["plan"],
      subsequent: ["later", "next", "after", "then"],
      substantial: ["large", "much"],
      "successfully complete": ["complete", "pass"],
      sufficient: ["enough"],
      terminate: ["end", "stop"],
      "the month of": ["omit"],
      therefore: ["thus", "so"],
      "this day and age": ["today"],
      "time period": ["time", "period"],
      "took advantage of": ["preyed on"],
      transmit: ["send"],
      transpire: ["happen"],
      "until such time as": ["until"],
      utilization: ["use"],
      utilize: ["use"],
      validate: ["confirm"],
      "various different": ["various", "different"],
      "whether or not": ["whether"],
      "with respect to": ["on", "about"],
      "with the exception of": ["except for"],
      witnessed: ["saw", "seen"],
    };
  }

  const analyzeText = () => {
    const getAdverbs = (sentence, newData) => {
      let lyWords = getLyWords();
      let qualifiers = getQualifyingWords();
      let words = sentence.split(/\s+/); // Split sentence into words
      let processedSentence = [];

      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let cleanWord = word.replace(/[^a-z0-9]/gi, "").toLowerCase(); // Remove punctuation and convert to lowercase

        // Check for individual adverbs
        if (cleanWord.endsWith("ly") && !lyWords.hasOwnProperty(cleanWord)) {
          newData.adverbs += 1;

          processedSentence.push(`<span class="adverb">${word}</span>`);
        } else if (qualifiers.hasOwnProperty(cleanWord)) {
          // Check if the word is a single-word qualifier
          newData.adverbs += 1;
          processedSentence.push(`<span class="adverb">${word}</span>`);
        } else {
          processedSentence.push(word);
        }
      }

      // Check for multi-word qualifying phrases
      Object.entries(qualifiers).forEach(([phrase, _]) => {
        if (phrase.includes(" ")) {
          // Only consider phrases with more than one word
          const regex = new RegExp(`\\b${phrase}\\b`, "gi");
          const matches = sentence.match(regex);
          if (matches) {
            newData.adverbs += matches.length;
            sentence = sentence.replace(
              regex,
              (match) => `<span class="adverb">${match}</span>`
            );
          }
        }
      });

      return sentence
        .split(/\s+/)
        .map((word, index) => {
          // Re-split the sentence to integrate multi-word phrases
          if (processedSentence[index]) {
            return processedSentence[index];
          } else {
            return word;
          }
        })
        .join(" ");
    };

    // Helper function to check and return the length of a qualifying phrase

    const getQualifier = (sentence, newData) => {
      const qualifiers = getQualifyingWords();
      Object.keys(qualifiers).forEach((key) => {
        const regex = new RegExp(`\\b${key}\\b`, "gi"); // Match whole words/phrases
        const matches = sentence.match(regex);
        if (matches) {
          newData.qualifiers += matches.length; // Increment for each match
          sentence = sentence.replace(
            regex,
            `<span class="qualifier">${key}</span>`
          );
        }
      });
      return sentence;
    };

    const countSyllables = (word) => {
      word = word.toLowerCase(); // Convert to lowercase
      if (word.length <= 3) return 1; // A word of three or fewer letters counts as one syllable
      word = word.replace(/(?:e$|ed|es|[^aeiouy]e[^aeiouy])/gi, ""); // Remove silent e's and e's at the end of words
      word = word.replace(/^y/, ""); // Remove initial y if it exists (y acts as a consonant here)
      const syllableCount = word.match(/[aeiouy]{1,2}/g); // Match vowel groups, including diphthongs
      return syllableCount ? syllableCount.length : 1; // Count vowel groups as syllables
    };
    const calculateGradeLevel = (words, sentences, text) => {
      if (words === 0 || sentences === 0) {
        return 0;
      }
      const wordList = text.match(/\w+/g) || [];
      const syllables = wordList.reduce(
        (acc, word) => acc + countSyllables(word),
        0
      );
      const wordsPerSentence = words / sentences;
      const syllablesPerWord = syllables / words;
      const gradeLevel =
        0.39 * wordsPerSentence + 11.8 * syllablesPerWord - 15.59;
      return gradeLevel.toFixed(2); // Keeping two decimal places for precision
    };

    const calculateReadingTime = (wordCount) => {
      const wordsPerMinute = 200;
      const totalMinutes = wordCount / wordsPerMinute;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = Math.floor(totalMinutes % 60);
      const seconds = Math.floor((totalMinutes * 60) % 60);
      return `${hours}h ${minutes}m ${seconds}s`;
    };
    // Helper function to split a paragraph into sentences
    const getSentenceFromParagraph = (p) => {
      let sentences = p
        .split(". ")
        .filter((s) => s.length > 0)
        .map((s) => s + ".");
      return sentences;
    };

    // Function to format and analyze the input text

    // Function to get difficult sentences
    const getDifficultSentences = (p, newData) => {
      let sentences = getSentenceFromParagraph(p);
      let hardOrNot = sentences.map((sent) => {
        let cleanSentence = sent.replace(/[^a-z0-9. ]/gi, "") + ".";
        let words = cleanSentence.split(" ").length;
        let letters = cleanSentence.split(" ").join("").length;
        let complexWordsCount = cleanSentence
          .split(" ")
          .filter((word) => word.length > 6).length; // Counting words longer than 6 characters as complex
        // newData.words += words;

        sent = getAdverbs(sent, newData);
        sent = getComplex(sent, newData);
        sent = getPassive(sent, newData);
        sent = getQualifier(sent, newData);

        // Criteria for hard and very hard sentences
        const isHard = words > 15 || complexWordsCount > 2; // Considering a sentence hard if it has more than 15 words or more than 2 complex words
        const isVeryHard = words > 20 || complexWordsCount > 4; // Considering a sentence very hard if it has more than 20 words or more than 4 complex words

        if (isVeryHard) {
          newData.veryHardSentences += 1;
          return `<span class="veryHardSentence">${sent}</span>`;
        } else if (isHard) {
          newData.hardSentences += 1;
          return `<span class="hardSentence">${sent}</span>`;
        }

        return sent;
      });

      return hardOrNot.join(" ");
    };

    const getPassive = (sentence, newData) => {
      const words = sentence.split(/\s+/); // Split by spaces
      const passiveIndicators = [
        "is",
        "are",
        "was",
        "were",
        "be",
        "been",
        "being",
      ];
      const commonParticiples = [
        "found",
        "done",
        "made",
        "seen",
        "wrapped",
        "given",
        "written",
        "taken",
      ]; // Extend this list as needed

      for (let i = 1; i < words.length - 1; i++) {
        // Start from the second word to ensure there's a word before and after
        const prevWord = words[i - 1].toLowerCase().replace(/[^\w]/g, ""); // Normalize previous word
        const currentWord = words[i].toLowerCase().replace(/[^\w]/g, ""); // Normalize current word
        const nextWord = words[i + 1].toLowerCase().replace(/[^\w]/g, ""); // Normalize next word

        // Basic check for a potential subject before the passive indicator
        const hasPotentialSubject =
          prevWord.length > 0 && !passiveIndicators.includes(prevWord);

        // Check if there's a potential subject, the current word is a passive indicator, and the next word is a common participle or ends with 'ed'
        if (
          hasPotentialSubject &&
          passiveIndicators.includes(currentWord) &&
          (commonParticiples.includes(nextWord) || nextWord.match(/ed$/))
        ) {
          newData.passiveVoice += 1;
          // Highlight the passive construction
          words[i] = `<span class="passive">${words[i]}</span>`;
          words[i + 1] = `<span class="passive">${words[i + 1]}</span>`;
          i += 1; // Skip the next word to avoid double counting
        }
      }

      return words.join(" ");
    };

    const getComplex = (sentence, newData) => {
      const complexWordsList = getComplexWords();

      Object.entries(complexWordsList).forEach(([key, value]) => {
        // Split the key into words to handle phrases
        const phraseWords = key.split(" ");
        // Escape special characters in each word of the phrase for regex
        const escapedPhraseWords = phraseWords.map((word) =>
          word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        );
        // Join the escaped words with '\s+' to match one or more spaces
        const regexPattern = escapedPhraseWords.join("\\s+");
        // Use word boundaries to match whole words/phrases
        const regex = new RegExp(`\\b${regexPattern}\\b`, "gi");

        const matches = sentence.match(regex);
        if (matches) {
          // Increment complex count for each match
          newData.complex += matches.length;
          // Replace each match in the sentence with a span to highlight
          sentence = sentence.replace(
            regex,
            (match) => `<span class="complex">${match}</span>`
          );
        }
      });
      return sentence;
    };

    const format = () => {
      console.log("inputText", inputText);
      let normalizedText = inputText?.trim().replace(/\s+/g, " ");
      // This pattern matches sequences of letters (possibly including hyphens or apostrophes within words)
      let wordMatch = normalizedText.match(/\b[\w'-]+(?:\b|$)/g) || [];
      let wordCount = wordMatch.length; // Count the number of words matched by the regex
      let paragraphs = inputText.split("\n").filter(Boolean).length;
      let sentences = inputText
        .split("\n")
        .map((p) => getSentenceFromParagraph(p))
        .flat().length;
      let newData = {
        paragraphs: paragraphs,
        sentences: sentences,
        wordCount: wordCount,
        hardSentences: 0,
        veryHardSentences: 0,
        adverbs: 0,
        passiveVoice: 0,
        complex: 0,
        letters: inputText.replace(/[^a-zA-Z]/g, "").length,
        characters: inputText.length,
        readingTime: calculateReadingTime(wordCount),
        grade: 0,
      };
      let highlighted = "";
      paragraphs = inputText.split("\n");
      let hardSentences = paragraphs.map((p) =>
        getDifficultSentences(p, newData)
      );
      let inP = hardSentences.map((para) => `<p>${para}</p>`);
      // newData.paragraphs = paragraphs.length;
      setOutputText(inP.join(" "));
      const gradeLevel = calculateGradeLevel(
        newData.wordCount,
        sentences,
        inputText
      );
      console.log("gradeLevel", gradeLevel);
      newData.grade = gradeLevel;

      // Example of adding a highlighted word (you'll replace this with your actual logic)
      highlighted = inputText.replace(
        /(exampleWord)/gi,
        "<span style='background-color: #D1F2FF;'>$1</span>"
      );

      setData(newData);

      // Use the callback to send highlighted text back
      // onHighlightUpdate(highlighted);
    };

    format();
  };

  // Use 'useEffect' to run 'analyzeText' whenever 'inputText' changes to achieve real-time analysis
  useEffect(() => {
    analyzeText();
    console.log("running");
  }, [inputText]);

  console.log("datadata", data);
  return (
    <div className="sidebars">
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "rgba(251, 251, 251, 1)",
          },
        }}
        className={drawerOpen ? "open-up" : ""}
        variant="permanent"
        anchor="right"
      >
        <div className="slide-btn">
          <span onClick={toggleDrawer}>Open Detail</span>
        </div>
        <Button
          variant="contained"
          className="button-para"
          data-toggle="modal"
          data-target="#rewrite"
        >
          Paraphrase
        </Button>
        <Link style={{ textDecoration: "none" }}>
          <Typography variant="h6" sx={{ m: 7 }} className="browser-temp">
            Browse Templates
          </Typography>
        </Link>
        <div className="readable">
          <p className="read">Readibility</p>
          <p className="grade">Grade {data.grade}</p>
          <p className="grade" style={{ color: "#84899D" }}>
            Good
          </p>
        </div>

        <List
          sx={{
            maxWidth: 360,
            bgcolor: "background.paper",
            margin: "19px 30px",
            paddingTop: "0px",
            paddingBottom: "0",
            borderRadius: "10px",
            textAlign: "left",
            lineHeight: "14px",
          }}
        >
          <p className="frame-open">
            <span className="frame">{data.letters}</span> Letters
          </p>
          <p className="frame-open">
            <span className="frame">{data.characters}</span> Characters
          </p>
          <p className="frame-open">
            <span className="frame">{data.wordCount}</span> Words
          </p>
          <p className="frame-open">
            <span className="frame">{data.sentences}</span> Sentences
          </p>
          <p className="frame-open">
            <span className="frame">{data.paragraphs}</span> Paragraphs
          </p>
          <p className="frame-open">
            <span className="frame">{data.readingTime}</span> Reading time
          </p>
        </List>
        <div className="paragraph" style={{ background: "#D1F2FF" }}>
          <span className="number-size">{data.adverbs}</span>
          <span className="format-text">
            adverbs, meeting the goal of {data.adverbs} or fewer.
          </span>
        </div>
        <div className="paragraph" style={{ background: "#C7FFDD" }}>
          <span
            className="number-size"
            style={{ backgroundColor: "rgba(15, 154, 70, 1)" }}
          >
            {data.passiveVoice}
          </span>
          <span className="format-text">
            use of passive voice, meeting the goal of {data.passiveVoice} or
            fewer.
          </span>
        </div>
        <div className="paragraph" style={{ background: "#EDDFFF" }}>
          <span
            className="number-size"
            style={{ backgroundColor: "rgba(112, 0, 255, 1)" }}
          >
            {data.complex}
          </span>
          <span className="format-text">
            {" "}
            phrase has a simpler alternative.
          </span>
        </div>
        <div className="paragraph" style={{ background: "#FFEFD0" }}>
          <span
            className="number-size"
            style={{ backgroundColor: "rgba(255, 168, 0, 1)" }}
          >
            {data.hardSentences}
          </span>
          <span className="format-text">
            of {data.hardSentences} sentences is hard to read.
          </span>
        </div>
        <div className="paragraph" style={{ background: "#FFD9D9" }}>
          <span
            className="number-size"
            style={{ backgroundColor: "rgba(249, 67, 67, 1)" }}
          >
            {data.veryHardSentences}
          </span>
          <span className="format-text">
            of {data.veryHardSentences} sentences is very hard to read.
          </span>
        </div>
      </Drawer>
      <div
        class="modal fade"
        id="rewrite"
        tabindex="-1"
        role="dialog"
        aria-labelledby="rewriteLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="rewriteLabel">
                Rewrite this
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body pb-5">
              <h3 className="read_write">
                I made a website where you have to guest if a Trump tweet is
                real or fake. I compiled 40 crazy real tweets and 40 fake
                tweets. It’s surprisingly hard!
              </h3>
              <div className="choose_text mb-3">
                <h2>As a Reddit title for </h2>
                <div class="dropdown entre">
                  <button
                    class="btn btn-outline dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    r/entrepreneur
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <Button
                variant="contained"
                className="button-center"
                data-toggle="modal"
                data-target="#rewrite"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
