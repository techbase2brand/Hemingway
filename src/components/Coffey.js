import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; 
// import { Button } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';


export default function Coffey() {
    const drawerWidth = 320;
 
    
        const navigate = useNavigate();
        const handleClick = () => {
            navigate('/review')
        }
      const [inputText, setInputText] = useState("");
      const [outputText, setOutputText] = useState("");
    //   const [dataNew, setDataNew] = useState();
      const [data, setData] = useState({
        paragraphs: 0,
        sentences: 0, 
        words: 0,
        hardSentences: 0,
        veryHardSentences: 0,
        adverbs: 0,
        passiveVoice: 0,
        complex: 0,
        qualifiers: 0, // Add this line
      }); 

      const[char,setChar]= useState(null)
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
    
      const getAdverbs = (sentence, newData) => {
        let lyWords = getLyWords();
        let qualifiers = getQualifyingWords();
        // Using consistent regex for word splitting
        let words = sentence.split(/\b/);
        let processedSentence = [];
    
        for (let i = 0; i < words.length; i++) {
          let word = words[i];
          let cleanWord = word.replace(/[^a-z0-9.]/gi, "").toLowerCase();
    
          // Check for "-ly" adverbs not in the lyWords list
          if (cleanWord.match(/ly$/) && !lyWords.hasOwnProperty(cleanWord)) {
            newData.adverbs += 1;
            processedSentence.push(`<span class="adverb">${word}</span>`);
            // console.log(`Adverb found: ${word}`); // Logging for debugging
            // newData.adverbs += 1;
            // return `<span class="adverb">${word}</span>`;
          }
          
          // Check for qualifying phrases
          else {
            let phraseMatch = findQualifyingPhrase(words, i, qualifiers);
            if (phraseMatch.matched) {
              newData.adverbs += 1;
              processedSentence.push(
                `<span class="adverb">${phraseMatch.phrase}</span>`
              );
              console.log(`Qualifying phrase found: ${phraseMatch.phrase}`); // Logging for debugging
              i += phraseMatch.length - 1;
            } else {
              processedSentence.push(word);
            }
          }
        }
    
        console.log(`Total adverbs found: ${newData.adverbs}`); // Logging for debugging
        return processedSentence.join(" ");
      };
    
      // Helper function to check and return the length of a qualifying phrase
      function findQualifyingPhrase(words, startIndex, qualifiers) {
        for (let key in qualifiers) {
          let keyWords = key.split(" ");
          let match = true;
          for (let i = 0; i < keyWords.length; i++) {
            if (words[startIndex + i]?.toLowerCase() !== keyWords[i]) {
              match = false;
              break;
            }
          }
          if (match) {
            return {
              matched: true,
              phrase: words
                .slice(startIndex, startIndex + keyWords.length)
                .join(" "),
              length: keyWords.length,
            };
          }
        }
        return { matched: false };
      }
    
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
    
      // Helper function to split a paragraph into sentences
      const getSentenceFromParagraph = (p) => {
        let sentences = p
          .split(". ")
          .filter((s) => s.length > 0)
          .map((s) => s + ".");
        return sentences;
      };


        var chars ;
        chars = inputText.replace(/\s/g, '').length;

   
      // Helper function to calculate readability level
      const calculateLevel = (letters, words, sentences) => {
        // Check if words or sentences are zero to avoid division by zero
        if (words === 0 || sentences === 0) {
          return 0;
        }
    
        // Calculate the readability level using the given formula
        let level = Math.round(4.71 *  (letters / words) + (0.5 * words) / sentences - 21.43);
    //    let characters = letters;
 
       

      
        // Ensure that the level is not negative
        return level <= 0 ? 0 : level;
      };

 
    
      // Function to format and analyze the input text
      const format = () => {
        let newData = {
          paragraphs: 0,
          sentences: 0,
          words: 0, 
          hardSentences: 0,
          veryHardSentences: 0,
          adverbs: 0,
          passiveVoice: 0,
          complex: 0,
        };
        console.log(newData,'newData')
        let paragraphs = inputText.split("\n");
        let hardSentences = paragraphs.map((p) =>
          getDifficultSentences(p, newData)
        );
        let inP = hardSentences.map((para) => `<p>${para}</p>`);
        console.log(inP,'inPinPinP')
        newData.paragraphs = paragraphs.length;
        setOutputText(inP.join(" "));
        setData(newData);
      };
    
      // Function to get difficult sentences
      const getDifficultSentences = (p, newData) => {
        let sentences = getSentenceFromParagraph(p);
        newData.sentences += sentences.length;
    
        let hardOrNot = sentences.map((sent) => {
          let cleanSentence = sent.replace(/[^a-z0-9. ]/gi, "") + ".";
          let words = cleanSentence.split(" ").length;
          let letters = cleanSentence.split(" ").join("").length;
          newData.words += words;
    
          sent = getAdverbs(sent, newData);
          sent = getComplex(sent, newData);
          sent = getPassive(sent, newData);
          sent = getQualifier(sent, newData); // Add this line
                console.log(getAdverbs,'getAdverbsgetAdverbsgetAdverbs')
          let level = calculateLevel(letters, words, 1);
          if (words < 14) {
            return sent;
          } else if (level >= 10 && level < 14) {
            newData.hardSentences += 1;
            return `<span class="hardSentence">${sent}</span>`;
          } else if (level >= 14) {
            newData.veryHardSentences += 1;
            return `<span class="veryHardSentence">${sent}</span>`;
          } else {
            return sent;
          }
        });
    
        return hardOrNot.join(" ");
      };
    
      const getPassive = (sentence, newData) => {
        const words = sentence.split(/\s+/); // Split by spaces
        for (let i = 1; i < words.length; i++) {
          // Start from the second word
          const currentWord = words[i].toLowerCase().replace(/[^\w]/g, ""); // Normalize current word
          const previousWord = words[i - 1].toLowerCase().replace(/[^\w]/g, ""); // Normalize previous word
          const passiveIndicators = [
            "is",
            "are",
            "was",
            "were",
            "be",
            "been",
            "being",
          ];
    
          if (
            currentWord.match(/ed$/) &&
            passiveIndicators.includes(previousWord)
          ) {
            newData.passiveVoice += 1;
            words[i - 1] = `<span class="passive">${words[i - 1]}</span>`;
            words[i] = `<span class="passive">${words[i]}</span>`;
          }
        }
    
        return words.join(" ");
      };
    
      // Helper function to check if a word is a past participle
      // This function can be expanded with a more comprehensive list of past participles
      function isPastParticiple(word)
     {
        const commonParticiples = [
          "been",
          "done",
          "seen",
          "written",
          "given",
          "made",
          "known",
        ];
        return word.match(/ed$/) || commonParticiples.includes(word.toLowerCase());
      }
    
      const getComplex = (sentence, newData) => {
        const complexWordsList = getComplexWords();
        Object.entries(complexWordsList).forEach(([key, value]) => {
          if (sentence.toLowerCase().includes(key)) {
            newData.complex += 1; // Increment complex count
            const regex = new RegExp(key, "gi");
            sentence = sentence.replace(
              regex,
              `<span class="complex">${key}</span>`
            );
          }
        });
        return sentence;
      };


    return (
        <div className="container-fluid">
            <h1 className='coffey text-left'>
             <Link className="text-black" to='/'>Coffey</Link>  
            </h1> 
            <div className="row m-auto" >
                <div className="col-12 col-md-4 col-lg-4 m-auto custom-forms">
                {/* <div className="inputText" id="output" dangerouslySetInnerHTML={{ __html: outputText }} style={{marginTop:'31px'}}></div>     */}
                <div className="inputText" id="output"  style={{marginTop:'31px'}}></div>    

                    <textarea cols='8' rows='8'
                        className="form-control"
                        placeholder="search..."
                        id="text-area"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <button className="btn btn-primary" onClick={format}>Analyze Text</button>
                </div>
            </div> 

            <Sidebar data={data}  setData={setData} chars ={chars}  setChar={setChar}/>

        </div>
    );
} 


