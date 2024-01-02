// data from pastebin
const encodedMessage = `78 land
  2 sun
  126 too
  185 huge
  223 dont
  296 such
  1 noun
  198 student
  134 brown
  75 complete
  139 play
  268 cook
  103 yard
  293 clock
  254 would
  231 plain
  148 excite
  50 fire
  164 wish
  4 cool
  105 child
  172 past
  63 colony
  112 oil
  3 dog
  174 back
  228 money
  40 kind
  62 open
  193 finger
  203 touch
  141 are
  48 dad
  150 am
  170 modern
  92 meant
  70 ocean
  104 pitch
  9 suit
  196 town
  295 east
  217 over
  55 group
  214 good
  23 kind
  246 down
  226 band
  41 especially
  232 organ
  46 of
  30 fire
  257 out
  155 area
  58 touch
  69 happen
  213 sat
  76 electric
  238 wrote
  89 buy
  167 lot
  240 stop
  281 corn
  256 where
  82 check
  183 live
  149 best
  175 hold
  206 cause
  251 grand
  250 present
  220 indicate
  117 slave
  22 we
  33 like
  212 visit
  64 state
  111 morning
  129 true
  85 are
  71 ball
  252 history
  72 seat
  247 rain
  98 less
  60 glass
  17 tone
  187 song
  259 fair
  275 element
  242 speed
  298 produce
  67 quotient
  61 sand
  292 begin
  230 moment
  154 offer
  19 probable
  8 all
  15 necessary
  222 post
  300 cent
  194 happen
  114 speech
  145 object
  201 silver
  202 third
  160 crease
  235 wait
  34 triangle
  289 idea
  130 clothe
  165 young
  219 discuss
  287 field
  95 company
  6 capital
  133 compare
  191 chart
  271 possible
  59 written
  146 remember
  162 mile
  44 cold
  51 lady
  244 felt
  56 against
  161 skin
  79 prepare
  65 he
  159 card
  106 organ
  192 object
  207 our
  227 major
  87 discuss
  282 system
  286 hole
  115 above
  189 they
  113 produce
  96 straight
  255 level
  54 though
  73 modern
  12 dry
  263 bought
  21 milk
  204 make
  180 show
  45 middle
  156 center
  186 blood
  153 speak
  264 prove
  279 select
  121 power
  272 come
  47 brown
  35 experiment
  32 strong
  234 hurry
  90 touch
  266 reach
  144 case
  43 beat
  261 over
  86 dry
  273 hill
  122 company
  119 opposite
  142 work
  258 field
  297 felt
  276 prepare
  270 now
  190 his
  181 stay
  260 toward
  14 observe
  290 time
  173 stop
  182 possible
  109 card
  179 prepare
  28 current
  277 compare
  128 neighbor
  49 thus
  233 include
  36 copy
  284 bit
  13 stead
  278 does
  99 general
  101 solve
  137 glad
  209 duck
  294 offer
  124 happen
  127 ball
  125 bread
  143 like
  25 machine
  10 come
  288 any
  218 band
  195 it
  100 section
  136 close
  269 heavy
  211 produce
  197 got
  38 possible
  239 insect
  57 way
  140 before
  116 men
  157 bird
  169 ease
  208 trade
  163 winter
  215 am
  11 repeat
  267 first
  285 to
  5 each
  221 guide
  188 column
  249 single
  94 remember
  91 wild
  245 major
  236 coast
  265 class
  229 done
  123 jump
  16 sister
  88 feel
  147 check
  81 fire
  80 nine
  31 indicate
  280 parent
  262 whole
  39 her
  216 the
  97 temperature
  52 design
  132 big
  20 skill
  166 friend
  224 hit
  237 wait
  42 instant
  241 blow
  184 about
  210 chick
  168 answer
  27 man
  108 material
  291 current
  26 think
  200 print
  299 nor
  205 better
  74 example
  248 people
  29 drink
  178 gun
  84 together
  66 cost
  53 require
  83 or
  151 people
  158 planet
  225 ease
  68 ready
  243 enough
  7 sugar
  274 deal
  138 with
  176 us
  77 share
  24 office
  107 protect
  37 low
  120 thus
  199 farm
  131 oxygen
  110 fire
  135 force
  18 select
  152 paragraph
  253 always
  171 poem
  118 chick
  177 planet
  102 fact
  283 moment
  93 term`;

function decode(encodedMessage) {
  console.log("Decoding message...");

  // Split the input by lines
  const lines = encodedMessage.trim().split("\n");

  console.log("lines");

  // Parse the lines into a map of numbers to words, also trimmed white space becasue it was breaking array
  const numberWordMap = new Map(
    lines.map((line) => {
      const trimmedLine = line.trim();
      const [numberStr, word] = trimmedLine.split(" ");
      const number = parseInt(numberStr, 10);
      return [number, word];
    })
  );

  // Sort the keys (numbers) of the map
  const sortedNumbers = Array.from(numberWordMap.keys()).sort((a, b) => a - b);

  // Create an array to hold the words of the message
  let messageWords = [];
  let currentLineEndNumber = 1;
  let increment = 1;

  // Construct the pyramid and decode the message
  for (let number of sortedNumbers) {
    if (number === currentLineEndNumber) {
      const word = numberWordMap.get(number);
      messageWords.push(word);
      console.log(`Number: ${number}, Word: ${word}`); // This will log the number and its corresponding word
      increment++;
      currentLineEndNumber += increment;
    }
  }

  // Join the words to form the decoded message
  return messageWords.join(" ");
}
