
// ═══════════════════════════════════
//  MUSCLE DATA
// ═══════════════════════════════════
const muscleData = {
  'chest': {
    name:'CHEST', latin:'Pectoralis Major & Minor', color:'#e82662', num:'02',
    tag:'ANTERIOR · UPPER BODY',
    group:'Chest',
    stats:{strength:85,mobility:60,endurance:70,size:88},
    facts:[
      {label:'Fiber Type',val:'Mixed'},
      {label:'Primary Action',val:'Horizontal Adduction'},
      {label:'Antagonist',val:'Upper Back'},
      {label:'Recovery',val:'48–72 hrs'},
    ],
    about:`The <strong>pectoralis major</strong> is a thick, fan-shaped muscle forming the bulk of the chest wall. It originates from the clavicle (clavicular head) and sternum/ribs (sternal head), inserting into the humerus. This dual origin creates two functionally distinct portions — the upper pec and the lower pec — which can be emphasized with incline or decline angles respectively.`,
    about2:`The <strong>pectoralis minor</strong> lies deep beneath, connecting the ribs to the coracoid process of the scapula, helping to stabilize and protract the shoulder. The serratus anterior wraps around the ribs and keeps the scapula flush against the rib cage. Together these muscles control every pushing and pressing movement in human activity.`,
    tips:[
      {icon:'✅',title:'Retract Shoulder Blades',body:'Pinch shoulder blades together before pressing to protect the AC joint and increase pec activation.'},
      {icon:'✅',title:'Touch the Bar to Chest',body:'Full range of motion stretches the pec fibers maximally for greater hypertrophy stimulus.'},
      {icon:'⚠️',title:'Avoid Elbow Flare',body:'Excessive elbow flare increases impingement risk. Keep elbows at 45–75° from the torso.'},
      {icon:'⚠️',title:'Don\'t Neglect the Upper Chest',body:'Most benching is flat or decline-biased. Incline pressing develops the clavicular head for a complete look.'},
    ],
    exercises:{
      beginner:[
        {name:'Push-Ups',type:'Bodyweight · Foundation',desc:'The baseline chest builder. Elevate feet for upper chest emphasis, hands on box for lower.'},
        {name:'Dumbbell Chest Press',type:'Free Weight · Beginner Friendly',desc:'Greater range of motion than barbell, ideal for learning the pressing pattern safely.'},
      ],
      intermediate:[
        {name:'Barbell Bench Press',type:'Compound · Primary Mover',desc:'The gold standard horizontal press. Allows the heaviest loading and greatest strength development.'},
        {name:'Incline Dumbbell Press',type:'Upper Chest Focus',desc:'Targets the clavicular head. Use 30–45° incline for maximal upper pec activation.'},
        {name:'Cable Fly',type:'Isolation · Constant Tension',desc:'Cables maintain tension throughout the range unlike dumbbells, maximizing the stretch position.'},
        {name:'Dips',type:'Compound · Lower Chest',desc:'Forward lean emphasizes pecs over triceps. One of the most effective lower pec exercises.'},
      ],
      advanced:[
        {name:'Weighted Dips',type:'Progressive Overload',desc:'Add a dip belt once bodyweight becomes easy for continued strength adaptation.'},
        {name:'Decline Barbell Press',type:'Lower Chest Mass',desc:'Greater pec fiber recruitment in the sternal head. Great finisher for complete chest development.'},
      ]
    },
    videos:[
      {id:'SCVCLChPQFY',label:'Perfect Bench Press Form',sub:'Full technique breakdown'},
      {id:'IODxDxX7oi4',label:'Complete Chest Workout',sub:'Science-based programming'},
    ]
  },
  'front-shoulder': {
    name:'FRONT SHOULDER', latin:'Anterior Deltoid', color:'#e85d26', num:'01',
    tag:'ANTERIOR · UPPER BODY',
    group:'Shoulders',
    stats:{strength:72,mobility:90,endurance:65,size:65},
    facts:[
      {label:'Fiber Type',val:'Fast Twitch Mix'},
      {label:'Primary Action',val:'Shoulder Flexion'},
      {label:'Antagonist',val:'Rear Deltoid'},
      {label:'Recovery',val:'48 hrs'},
    ],
    about:`The <strong>anterior deltoid</strong> forms the front cap of the shoulder. Originating from the clavicle and inserting on the deltoid tuberosity of the humerus, its primary actions are shoulder flexion (lifting the arm forward) and internal rotation. It is heavily recruited in virtually all pressing movements — making it one of the most frequently (and often over-) trained muscles.`,
    about2:`Because pressing exercises already provide substantial anterior delt volume, most people need far less direct front raise work than they think. The <strong>rotator cuff</strong> — supraspinatus, infraspinatus, teres minor, and subscapularis — lies beneath, providing critical joint stability and is a frequent injury site requiring proactive strengthening.`,
    tips:[
      {icon:'✅',title:'Prioritize Overhead Pressing',body:'The OHP trains all three deltoid heads simultaneously and is the single best shoulder movement.'},
      {icon:'✅',title:'Face Pulls for Rear Delts',body:'Balance pressing with face pulls to prevent impingement and protect shoulder joint health.'},
      {icon:'⚠️',title:'Limit Front Raises',body:'If you already bench and press, your anterior delts are likely overtrained — not undertrained.'},
      {icon:'⚠️',title:'Never Press Behind the Neck',body:'Behind-neck pressing creates extreme shoulder impingement and should be avoided entirely.'},
    ],
    exercises:{
      beginner:[
        {name:'Pike Push-Up',type:'Bodyweight · Shoulder',desc:'Excellent beginner shoulder developer. Progress to decline pike push-ups then handstand push-ups.'},
        {name:'Dumbbell Lateral Raise',type:'Isolation · Medial',desc:'Builds shoulder width. Control the negative phase for maximum medial delt activation.'},
      ],
      intermediate:[
        {name:'Overhead Press',type:'Compound · Primary Mover',desc:'The king of shoulder exercises. Can be done seated or standing; standing recruits more stabilizers.'},
        {name:'Arnold Press',type:'Full Rotation · All Heads',desc:'Rotational pressing hits all three deltoid heads through a unique range of motion.'},
        {name:'Front Raise',type:'Isolation · Anterior',desc:'Use light weight and strict form. The cable version provides more constant tension.'},
        {name:'Landmine Press',type:'Unilateral · Functional',desc:'Arched pressing angle hits the upper chest and anterior delt beautifully. Great variation.'},
      ],
      advanced:[
        {name:'Handstand Push-Up',type:'Bodyweight · Advanced',desc:'Maximum shoulder strength and stability demand. Use wall support to build up to freestanding.'},
        {name:'Z Press',type:'Seated Floor · Core Integration',desc:'Performed seated on the floor, eliminating leg drive. Demands extreme core strength.'},
      ]
    },
    videos:[
      {id:'qEwKCR5JCog',label:'Overhead Press Masterclass',sub:'Complete technique guide'},
      {id:'bwMjkFDQVrA',label:'Shoulder Training Anatomy',sub:'All 3 heads explained'},
    ]
  },
  'rear-shoulder': {
    name:'REAR SHOULDER', latin:'Posterior Deltoid', color:'#e85d26', num:'01',
    tag:'POSTERIOR · UPPER BODY',
    group:'Shoulders',
    stats:{strength:58,mobility:75,endurance:70,size:55},
    facts:[
      {label:'Fiber Type',val:'Slow Twitch Mix'},
      {label:'Primary Action',val:'Shoulder Extension'},
      {label:'Antagonist',val:'Anterior Deltoid'},
      {label:'Recovery',val:'48 hrs'},
    ],
    about:`The <strong>posterior deltoid</strong> is the rear head of the deltoid muscle, originating from the spine of the scapula and inserting onto the humerus. Its functions include horizontal abduction (pulling the arm back), external rotation, and shoulder extension. It is consistently one of the most underdeveloped muscles due to the chronic overemphasis on pressing in modern training.`,
    about2:`Weakness in the posterior deltoid leads directly to forward shoulder rounding, impingement syndrome, and rotator cuff injuries. Training it regularly with face pulls, reverse flyes, and rowing movements dramatically improves posture and protects the shoulder joint for the long term.`,
    tips:[
      {icon:'✅',title:'Train Rear Delts Every Session',body:'They recover quickly and are chronically neglected. Face pulls at the start of every push and pull session is a common elite practice.'},
      {icon:'✅',title:'External Rotation is Protective',body:'Include band pull-aparts and face pulls not just for size but for rotator cuff health.'},
      {icon:'⚠️',title:'Don\'t Confuse with Mid Traps',body:'Bent-over rear delt work must use proper arm position (high, flared elbows) to target the rear delt vs rhomboids.'},
      {icon:'⚠️',title:'Avoid Momentum',body:'Rear delt work is most effective with very controlled, deliberate motion. Swinging cheats the movement.'},
    ],
    exercises:{
      beginner:[
        {name:'Band Pull-Apart',type:'Mobility · External Rotation',desc:'Extremely effective and low-risk. Can be done every day. Use a light band for high reps.'},
        {name:'Face Pull',type:'Cable · Rear Delt & Rotator Cuff',desc:'The #1 shoulder health exercise. Attach rope at forehead height and pull to your face.'},
      ],
      intermediate:[
        {name:'Reverse Fly',type:'Isolation · Posterior Delt',desc:'Bent over or on incline bench. Control the negative for maximum fiber recruitment.'},
        {name:'Bent-Over Row (Wide Grip)',type:'Compound · Rear Delt',desc:'Flare the elbows to 90° to shift emphasis from lats to rear delts and rhomboids.'},
        {name:'Chest-Supported Row',type:'Supported · Strict Form',desc:'Removes lower back fatigue for pure upper back and rear delt training.'},
        {name:'Reverse Cable Crossover',type:'Isolation · Stretch Position',desc:'Excellent for hitting rear delts at full stretch — a position few exercises achieve.'},
      ],
      advanced:[
        {name:'Prone Y-T-W Raises',type:'Corrective · Full Scapular',desc:'Three-position exercise that comprehensively trains all scapular stabilizers.'},
        {name:'Single-Arm Cable Rear Delt Fly',type:'Unilateral · Strict',desc:'Allows full range of motion and corrects left-right imbalances.'},
      ]
    },
    videos:[
      {id:'rep-qVOkqgk',label:'Rear Delt Training Guide',sub:'Why most people neglect it'},
      {id:'u0BavmMGBGQ',label:'Face Pulls — Perfect Form',sub:'Shoulder health fundamentals'},
    ]
  },
  'upper-back': {
    name:'UPPER BACK', latin:'Latissimus Dorsi & Trapezius', color:'#2662e8', num:'03',
    tag:'POSTERIOR · UPPER BODY',
    group:'Back',
    stats:{strength:92,mobility:55,endurance:88,size:95},
    facts:[
      {label:'Fiber Type',val:'Mixed (Slow Dominant)'},
      {label:'Primary Action',val:'Shoulder Adduction/Extension'},
      {label:'Antagonist',val:'Chest & Shoulders'},
      {label:'Recovery',val:'72 hrs'},
    ],
    about:`The <strong>latissimus dorsi</strong> is the broadest muscle in the human body, covering the majority of the back. Originating from the thoracic spine, iliac crest, and lower ribs, it inserts into the humerus. Its primary actions are shoulder adduction (pulling the arm down), extension (pulling it back), and internal rotation — making it dominant in all pulling movements.`,
    about2:`The <strong>trapezius</strong> is a large, kite-shaped muscle with upper, middle, and lower portions, each with different functions. Upper traps elevate the scapula, middle traps retract it, and lower traps depress it. The rhomboids (major and minor) also retract the shoulder blades. Together this complex creates the V-taper physique and is fundamental to posture and athletic power transfer.`,
    tips:[
      {icon:'✅',title:'Depressed Shoulders on Pull-Ups',body:'Initiate every pull by depressing (pulling down) the shoulder blades before bending the elbow for maximum lat activation.'},
      {icon:'✅',title:'Use Mixed Grip on Deadlifts',body:'Grip is often the limiting factor before the back. Straps or mixed grip allow back muscles to work harder.'},
      {icon:'⚠️',title:'Don\'t Round the Lower Back',body:'Spinal flexion under load is the leading cause of disc herniation. Maintain neutral spine on all rowing.'},
      {icon:'⚠️',title:'Avoid Shrug Dominance',body:'Over-elevated shoulders during pressing shortens the upper traps and compresses the cervical spine.'},
    ],
    exercises:{
      beginner:[
        {name:'Lat Pulldown',type:'Machine · Learning Pattern',desc:'Teaches the pulling pattern before bodyweight pull-ups are accessible. Use full range of motion.'},
        {name:'Seated Cable Row',type:'Cable · Mid Back',desc:'Excellent for developing thickness. Pull to the lower sternum and hold the contracted position.'},
      ],
      intermediate:[
        {name:'Pull-Ups / Chin-Ups',type:'Compound · Lat Dominant',desc:'The gold standard back exercise. Supinated grip recruits more biceps; pronated recruits more lats.'},
        {name:'Barbell Row',type:'Compound · Full Back',desc:'The horizontal pulling counterpart to the bench press. Essential for complete back development.'},
        {name:'T-Bar Row',type:'Compound · Mid Back',desc:'Neutral grip allows heavy loading for back thickness. Great alternative to barbell row.'},
        {name:'Shrugs',type:'Isolation · Upper Traps',desc:'Hold the peak contraction for 2 seconds. Avoid rolling the shoulders — pure elevation only.'},
      ],
      advanced:[
        {name:'Weighted Pull-Ups',type:'Progressive Overload',desc:'Once bodyweight pull-ups are easy, add a belt for continued strength and mass gains.'},
        {name:'Meadows Row',type:'Unilateral · Lat Stretch',desc:'Named after John Meadows. Outstanding for hitting the lat in the fully stretched position.'},
      ]
    },
    videos:[
      {id:'eGo4IYlbE5g',label:'Perfect Pull-Up Form',sub:'Complete technique guide'},
      {id:'9efgcAjQe7E',label:'Complete Back Workout',sub:'Science-based programming'},
    ]
  },
  'lower-back': {
    name:'LOWER BACK', latin:'Erector Spinae & Multifidus', color:'#4488ff', num:'03',
    tag:'POSTERIOR · CORE',
    group:'Back',
    stats:{strength:88,mobility:50,endurance:82,size:70},
    facts:[
      {label:'Fiber Type',val:'Slow Twitch (Postural)'},
      {label:'Primary Action',val:'Spinal Extension & Stability'},
      {label:'Antagonist',val:'Rectus Abdominis'},
      {label:'Recovery',val:'72–96 hrs'},
    ],
    about:`The <strong>erector spinae</strong> group consists of three columns running parallel to the spine: iliocostalis (lateral), longissimus (intermediate), and spinalis (medial). Spanning from the sacrum to the skull, they extend and laterally flex the spine, and most critically — maintain spinal stability under load during compound lifts.`,
    about2:`The <strong>multifidus</strong> is a deep segmental muscle providing intersegmental stability. Together with the erectors, these muscles are primarily slow-twitch and built for endurance. Lower back weakness is the leading cause of lower back pain — a condition affecting 80% of adults at some point in their lives. Strengthening these muscles through proper hip hinge mechanics is one of the most important investments in long-term health.`,
    tips:[
      {icon:'✅',title:'Brace Before Every Rep',body:'Take a deep breath, brace your abs as if expecting a punch, then lift. This intra-abdominal pressure protects the spine.'},
      {icon:'✅',title:'Hip Hinge Pattern First',body:'Master the hip hinge (pushing hips back, not sitting down) before loading the deadlift to protect the lumbar discs.'},
      {icon:'⚠️',title:'Never Round Under Load',body:'The deadlift and RDL require a neutral-to-slightly-arched spine. Rounding compresses discs dangerously.'},
      {icon:'⚠️',title:'Don\'t Skip Erector Work',body:'Many people train abs but neglect the back extensors — this creates a dangerous front-back imbalance.'},
    ],
    exercises:{
      beginner:[
        {name:'Bird Dog',type:'Stability · Safe Introduction',desc:'On all fours, extend opposite arm and leg simultaneously. Superb for multifidus activation and balance.'},
        {name:'Superman Hold',type:'Bodyweight · Extension',desc:'Lying face down, lift arms and legs simultaneously. Hold for 2–3 seconds for isometric strength.'},
      ],
      intermediate:[
        {name:'Romanian Deadlift',type:'Hip Hinge · Erectors',desc:'The safest and most effective way to load the erectors. Maintain back arch and push hips back.'},
        {name:'Hyperextension',type:'Isolation · Extension',desc:'On a 45° or GHD machine. Progress to weighted once bodyweight is comfortable.'},
        {name:'Good Morning',type:'Barbell Hinge · Lower Back',desc:'Excellent for learning the hip hinge under load. Start very light to master the movement.'},
        {name:'Deadlift',type:'Compound · Primary Mover',desc:'The ultimate posterior chain exercise. Requires technique mastery before loading heavily.'},
      ],
      advanced:[
        {name:'Deficit Deadlift',type:'Extended Range of Motion',desc:'Standing on a plate extends the range for greater muscle recruitment through a longer length.'},
        {name:'GHD Back Extension',type:'Full Hip Extension',desc:'The Glute-Ham Developer allows much greater range than a 45° hyperextension bench.'},
      ]
    },
    videos:[
      {id:'op9kVnSso6Q',label:'Deadlift Form Guide',sub:'Step-by-step mastery'},
      {id:'PLAbAerPkPs',label:'Lower Back Strengthening',sub:'Injury prevention protocol'},
    ]
  },
  'biceps': {
    name:'BICEPS', latin:'Biceps Brachii', color:'#26e8a6', num:'04',
    tag:'ANTERIOR · ARM',
    group:'Arms',
    stats:{strength:75,mobility:72,endurance:60,size:68},
    facts:[
      {label:'Fiber Type',val:'Fast Twitch Mix'},
      {label:'Primary Action',val:'Elbow Flexion & Supination'},
      {label:'Antagonist',val:'Triceps Brachii'},
      {label:'Recovery',val:'48 hrs'},
    ],
    about:`The <strong>biceps brachii</strong> is a two-headed muscle on the anterior upper arm. The <strong>long head</strong> runs through the bicipital groove and creates the peak when flexed; the <strong>short head</strong> contributes more to width. Both heads cross the elbow and shoulder joints, enabling elbow flexion, forearm supination (rotating palm upward), and weak shoulder flexion.`,
    about2:`The <strong>brachialis</strong> lies beneath the biceps and is actually the primary elbow flexor by volume. Unlike the biceps, it cannot supinate — so hammer curls and neutral-grip exercises preferentially target it. Developing the brachialis pushes the biceps upward, creating the appearance of a larger arm even without more bicep mass specifically.`,
    tips:[
      {icon:'✅',title:'Supinate at the Top',body:'Turn your pinky toward the ceiling at peak contraction to fully engage the supination function of the bicep.'},
      {icon:'✅',title:'Stretch at the Bottom',body:'Full elbow extension at the bottom of each curl maximizes time under tension and muscle damage for growth.'},
      {icon:'⚠️',title:'Stop Swinging',body:'Elbow swinging removes tension from the biceps. Keep elbows stationary or use a preacher bench.'},
      {icon:'⚠️',title:'Don\'t Neglect Brachialis',body:'Add hammer curls to every arm day. The brachialis is often the real limiting factor in arm size.'},
    ],
    exercises:{
      beginner:[
        {name:'Dumbbell Curl',type:'Foundation · Free Weight',desc:'The fundamental bicep exercise. Control the negative for maximum tension on the muscle belly.'},
        {name:'Hammer Curl',type:'Brachialis Focus · Neutral Grip',desc:'Neutral grip shifts emphasis to brachialis and brachioradialis for complete arm development.'},
      ],
      intermediate:[
        {name:'Barbell Curl',type:'Compound · Max Loading',desc:'Allows heavier loading than dumbbells. Use a shoulder-width or slightly wider grip.'},
        {name:'Incline Dumbbell Curl',type:'Stretch · Long Head Emphasis',desc:'The incline angle stretches the long head, providing a unique stimulus missed by standing curls.'},
        {name:'Cable Curl',type:'Constant Tension',desc:'Unlike free weights, cables provide tension at both the top and bottom of the movement.'},
        {name:'Preacher Curl',type:'Isolation · Short Head',desc:'Prevents shoulder compensation and isolates the bicep fully, especially the short head.'},
      ],
      advanced:[
        {name:'Concentration Curl',type:'Peak Contraction',desc:'Maximizes the mind-muscle connection. Studies show it produces the highest bicep activation.'},
        {name:'Spider Curl',type:'Prone · Constant Tension',desc:'Lying prone on an incline bench eliminates momentum and fully isolates the biceps.'},
      ]
    },
    videos:[
      {id:'ykJmrZ5v0Oo',label:'Perfect Bicep Curl Form',sub:'Technique and programming'},
      {id:'3PIuFCqbNxw',label:'Biceps Anatomy & Training',sub:'Science of arm development'},
    ]
  },
  'triceps': {
    name:'TRICEPS', latin:'Triceps Brachii', color:'#26e8a6', num:'04',
    tag:'POSTERIOR · ARM',
    group:'Arms',
    stats:{strength:80,mobility:65,endurance:65,size:74},
    facts:[
      {label:'Fiber Type',val:'Fast Twitch Dominant'},
      {label:'Primary Action',val:'Elbow Extension'},
      {label:'Antagonist',val:'Biceps Brachii'},
      {label:'Recovery',val:'48 hrs'},
    ],
    about:`The <strong>triceps brachii</strong> consists of three heads — <strong>long, lateral, and medial</strong> — comprising roughly 2/3 of the upper arm's mass. The long head is the largest, originates from the scapula, and crosses the shoulder joint. The lateral head creates the horseshoe shape visible on the outside of the arm. The medial head (deep) works in all elbow extension.`,
    about2:`Because the triceps account for more arm volume than biceps, anyone wanting bigger arms must prioritize triceps development. The long head requires overhead extension exercises for full stretch; the lateral head responds to pushdowns and close-grip pressing. Training both the stretched and contracted positions through different exercises is key to complete tricep development.`,
    tips:[
      {icon:'✅',title:'Include Overhead Extension',body:'The long head is only fully stretched in the overhead position. Skull crushers and overhead extensions are essential.'},
      {icon:'✅',title:'Full Lockout on Presses',body:'Ensure full elbow lockout on every bench press rep to maximally activate the triceps medial head.'},
      {icon:'⚠️',title:'Elbows Don\'t Drift Out',body:'On overhead extensions and skullcrushers, keep elbows in — flaring reduces tricep tension.'},
      {icon:'⚠️',title:'Don\'t Overtrain Pressing',body:'Bench, overhead, and dips already heavily tax the triceps. Isolation work should be supplemental.'},
    ],
    exercises:{
      beginner:[
        {name:'Diamond Push-Up',type:'Bodyweight · Close Grip',desc:'Hands forming a diamond under the chest targets the lateral head effectively without equipment.'},
        {name:'Tricep Pushdown',type:'Cable · Learning Motor Pattern',desc:'Excellent for beginners to learn the extension motion and feel the tricep working.'},
      ],
      intermediate:[
        {name:'Close-Grip Bench Press',type:'Compound · Max Loading',desc:'The heaviest tricep exercise. Use shoulder-width grip to shift emphasis from chest to triceps.'},
        {name:'Skull Crushers',type:'Isolation · Long Head',desc:'Lower the bar to forehead or behind the head. Essential for developing tricep mass.'},
        {name:'Overhead Extension',type:'Stretch · Long Head',desc:'Only exercise that fully stretches the long head. Can be done with dumbbell, cable, or EZ bar.'},
        {name:'Dips',type:'Compound · Full Tricep',desc:'Keep torso vertical and full lockout at top to keep emphasis on triceps over chest.'},
      ],
      advanced:[
        {name:'Tate Press',type:'Unique Angle · Lateral Head',desc:'Flared elbow dumbbell variation that uniquely isolates the lateral head of the tricep.'},
        {name:'Band Pushdown',type:'Accommodating Resistance',desc:'Bands increase resistance at lockout where the tricep is strongest — a useful variation.'},
      ]
    },
    videos:[
      {id:'nRiJVZDpdL0',label:'Tricep Training Guide',sub:'Complete programming'},
      {id:'mwsz_uBSa4w',label:'Build Bigger Triceps',sub:'Science-based approach'},
    ]
  },
  'core': {
    name:'CORE (ABS)', latin:'Rectus Abdominis, Obliques & TVA', color:'#e8c426', num:'05',
    tag:'ANTERIOR · CORE',
    group:'Core',
    stats:{strength:68,mobility:74,endurance:82,size:60},
    facts:[
      {label:'Fiber Type',val:'Mixed (Endurance Bias)'},
      {label:'Primary Action',val:'Spinal Flexion & Stabilization'},
      {label:'Antagonist',val:'Erector Spinae'},
      {label:'Recovery',val:'24–48 hrs'},
    ],
    about:`The core encompasses four main muscles: the <strong>rectus abdominis</strong> (the "six-pack") running vertically between the sternum and pubis; the <strong>external obliques</strong> running diagonally downward from the ribs; the <strong>internal obliques</strong> running the opposite direction; and the deepest layer — the <strong>transverse abdominis (TVA)</strong> — which wraps around the torso like a corset.`,
    about2:`The TVA is the most important core muscle for spinal health. When contracted, it dramatically increases intra-abdominal pressure and protects the lumbar discs during heavy lifts. The obliques generate rotational force and are critical for athletic performance in throwing, swinging, and changing direction. Six-pack visibility is almost entirely determined by body fat percentage, not just training.`,
    tips:[
      {icon:'✅',title:'Train Anti-Extension First',body:'Plank variations and ab wheel rollouts train the core\'s primary job: preventing spinal extension under load.'},
      {icon:'✅',title:'Breathe Properly',body:'Exhale hard at the peak contraction of every crunch. This activates the TVA and maximizes rectus abdominis activation.'},
      {icon:'⚠️',title:'Sit-Ups Can Cause Back Pain',body:'Full sit-ups with straight legs compress lumbar discs. Crunches with bent knees are safer and equally effective.'},
      {icon:'⚠️',title:'Abs Don\'t Need Daily Training',body:'Like other muscles, abs need 48 hours recovery. 3–4 targeted sessions per week is optimal.'},
    ],
    exercises:{
      beginner:[
        {name:'Plank',type:'Isometric · Foundation',desc:'Master 60-second holds with neutral spine before progressing. Most people do planks wrong.'},
        {name:'Dead Bug',type:'Anti-Extension · TVA',desc:'Lying on back, extend opposite arm and leg while keeping lower back pressed to floor.'},
      ],
      intermediate:[
        {name:'Hanging Knee Raise',type:'Lower Abs · Beginner',desc:'Progress to straight leg raises then toes-to-bar as core strength develops.'},
        {name:'Russian Twist',type:'Rotation · Obliques',desc:'Control the rotation speed for maximum oblique activation. Add weight as it becomes easy.'},
        {name:'Cable Crunch',type:'Weighted · Progressive Load',desc:'The best way to progressively overload the abs. Pull from above and round the spine.'},
        {name:'Ab Wheel Rollout',type:'Anti-Extension · Advanced',desc:'One of the most demanding core exercises. Start with partial range on knees.'},
      ],
      advanced:[
        {name:'Toes to Bar',type:'Full Hanging Flexion',desc:'Requires significant lat and hip flexor strength in addition to abs. Elite core strength indicator.'},
        {name:'Dragon Flag',type:'Full Body Lever · Advanced',desc:'Bruce Lee\'s signature exercise. Requires exceptional full-body core control and strength.'},
      ]
    },
    videos:[
      {id:'DHD1-2P4jE8',label:'6-Pack Science Guide',sub:'Training and nutrition truth'},
      {id:'l4kQd9eWclE',label:'Core Strengthening Workout',sub:'Full routine breakdown'},
    ]
  },
  'forearm': {
    name:'FOREARM', latin:'Brachioradialis & Flexor/Extensor Group', color:'#7de8c0', num:'04',
    tag:'ANTERIOR · ARM',
    group:'Arms',
    stats:{strength:60,mobility:68,endurance:85,size:55},
    facts:[
      {label:'Fiber Type',val:'Slow Twitch (Endurance)'},
      {label:'Primary Action',val:'Wrist Flexion & Grip'},
      {label:'Antagonist',val:'Wrist Extensors'},
      {label:'Recovery',val:'24 hrs'},
    ],
    about:`The forearm contains over 20 muscles in two compartments. The anterior (flexor) compartment contains the wrist flexors and finger flexors. The posterior (extensor) compartment contains the wrist and finger extensors. The <strong>brachioradialis</strong> is the largest and most visible forearm muscle, running from the distal humerus to the wrist and performing elbow flexion in a neutral grip.`,
    about2:`Grip strength is one of the best predictors of all-cause mortality in aging populations and directly limits performance in deadlifts, rows, and pull-ups. The forearms are heavily endurance-oriented — they respond well to high-rep training and recover faster than larger muscle groups, making daily training possible for dedicated trainees.`,
    tips:[
      {icon:'✅',title:'Grip Is Often the Weak Link',body:'Before adding straps, spend 4–6 weeks developing grip strength through dead hangs and farmer carries.'},
      {icon:'✅',title:'High Reps Work Well',body:'Forearms respond to volume and endurance work. 15–25 reps per set is often more effective than heavy low reps.'},
      {icon:'⚠️',title:'Avoid Wrist Wraps Too Early',body:'Wraps are a crutch that prevents forearm adaptation. Save them for maximal effort sets only.'},
      {icon:'⚠️',title:'Prevent Overuse Injury',body:'Forearm tendonitis is common from too much computer work + heavy lifting. Include wrist mobility daily.'},
    ],
    exercises:{
      beginner:[
        {name:'Dead Hang',type:'Isometric · Grip Foundation',desc:'Hang from a pull-up bar as long as possible. One of the most effective grip strength builders.'},
        {name:'Wrist Curl',type:'Isolation · Flexors',desc:'Palm up, wrist over a bench edge, curl the weight up fully. Control the negative.'},
      ],
      intermediate:[
        {name:'Reverse Curl',type:'Brachioradialis Focus',desc:'Palm down curling develops the brachioradialis and wrist extensors simultaneously.'},
        {name:'Farmer\'s Walk',type:'Functional · Full Forearm',desc:'Carry heavy dumbbells for distance. Builds grip, traps, and core simultaneously.'},
        {name:'Wrist Roller',type:'Endurance · Circumferential',desc:'Roll a weight up and down repeatedly. Exhausts the entire forearm in both directions.'},
        {name:'Plate Pinch',type:'Pinch Grip · Specific',desc:'Hold two plates smooth-side out and walk or stand for time. Unique grip challenge.'},
      ],
      advanced:[
        {name:'Axle Bar Deadlift',type:'Thick Bar · Extreme Grip',desc:'Fat/axle bar removes the ability to hook grip, forcing maximum grip strength.'},
        {name:'One-Arm Dead Hang',type:'Elite Grip Strength',desc:'The standard for serious grip training. Work up gradually to avoid tendon injury.'},
      ]
    },
    videos:[
      {id:'OtfcRMFSCxk',label:'Forearm & Grip Training',sub:'Complete strength guide'},
      {id:'vhm8iXi0gBE',label:'Build Bigger Forearms',sub:'Anatomy-based approach'},
    ]
  },
  'quadriceps': {
    name:'QUADRICEPS', latin:'Rectus Femoris & Vastus Group', color:'#d426e8', num:'06',
    tag:'ANTERIOR · LOWER BODY',
    group:'Legs',
    stats:{strength:92,mobility:65,endurance:78,size:90},
    facts:[
      {label:'Fiber Type',val:'Fast Twitch Mix'},
      {label:'Primary Action',val:'Knee Extension'},
      {label:'Antagonist',val:'Hamstrings'},
      {label:'Recovery',val:'72 hrs'},
    ],
    about:`The quadriceps are a group of four muscles: <strong>rectus femoris</strong> (crosses both hip and knee), <strong>vastus lateralis</strong> (outer quad sweep), <strong>vastus medialis</strong> (inner quad, the VMO teardrop), and <strong>vastus intermedius</strong> (deep). They are the primary knee extensors — dominant in squatting, running, cycling, jumping, and stair climbing.`,
    about2:`The <strong>VMO (vastus medialis oblique)</strong> is critical for patella (kneecap) tracking during knee extension. VMO weakness is a leading cause of patellar tendinitis and knee pain. Terminal knee extension exercises and leg press with narrow foot positioning preferentially target the VMO. The rectus femoris is frequently tight in people who sit extensively, contributing to anterior pelvic tilt.`,
    tips:[
      {icon:'✅',title:'Knees Track Over Toes',body:'Allow the knees to travel forward past the toes during squats — this is natural and safe with proper ankle mobility.'},
      {icon:'✅',title:'Knee to 90° Minimum',body:'Partial squats primarily train the glutes. For quad mass, squat to at least parallel (thighs parallel to floor).'},
      {icon:'⚠️',title:'Valgus Collapse is Dangerous',body:'Knees caving inward (valgus) during squats and lunges increases ACL injury risk. Cue "spread the floor."'},
      {icon:'⚠️',title:'Warm Up the Knee Joint',body:'The quad tendon and patella need warming up. Always perform bodyweight squats before loading heavily.'},
    ],
    exercises:{
      beginner:[
        {name:'Goblet Squat',type:'Bodyweight/Light · Technique',desc:'Holding a dumbbell in front teaches proper squat form, balancing weight and keeping torso upright.'},
        {name:'Leg Extension',type:'Machine · Isolation',desc:'Safe introduction to quad isolation. Squeeze at the top for VMO activation.'},
      ],
      intermediate:[
        {name:'Back Squat',type:'Compound · King of Exercises',desc:'The most effective quad builder. High bar placement shifts more emphasis to quads vs low bar.'},
        {name:'Leg Press',type:'Machine · Quad Dominant',desc:'Narrow foot stance emphasizes the quads. Allows higher volume without spinal compression.'},
        {name:'Bulgarian Split Squat',type:'Unilateral · Balance Challenge',desc:'One of the most demanding and effective single-leg quad exercises. Corrects imbalances.'},
        {name:'Lunge',type:'Unilateral · Functional',desc:'Forward, reverse, and walking lunges each provide slightly different stimulus to the quad.'},
      ],
      advanced:[
        {name:'Front Squat',type:'Upright Torso · Quad Emphasis',desc:'Bar across the front deltoids forces upright torso, maximally loading the quads.'},
        {name:'Hack Squat',type:'Machine · High Volume',desc:'Allows extreme quad loading with less lower back demand than barbell squats.'},
      ]
    },
    videos:[
      {id:'ultWZbUMPL8',label:'Perfect Squat Form',sub:'Biomechanics explained'},
      {id:'B0Zoa_XhOIQ',label:'Quad Hypertrophy Guide',sub:'Science-based leg training'},
    ]
  },
  'glutes': {
    name:'GLUTES', latin:'Gluteus Maximus, Medius & Minimus', color:'#d426e8', num:'06',
    tag:'POSTERIOR · LOWER BODY',
    group:'Legs',
    stats:{strength:95,mobility:62,endurance:75,size:92},
    facts:[
      {label:'Fiber Type',val:'Fast Twitch Dominant'},
      {label:'Primary Action',val:'Hip Extension & Abduction'},
      {label:'Antagonist',val:'Hip Flexors'},
      {label:'Recovery',val:'72 hrs'},
    ],
    about:`The <strong>gluteus maximus</strong> is the largest and heaviest muscle in the human body. Originating from the iliac crest and sacrum, inserting into the femur and iliotibial band, it performs powerful hip extension and external rotation. It is the primary muscle for climbing stairs, sprinting, jumping, and squatting — the engine of human locomotion.`,
    about2:`The <strong>gluteus medius and minimus</strong> abduct the hip and critically stabilize the pelvis during single-leg stance (every walking step). Weakness here causes the Trendelenburg sign — the opposite hip drops during walking — and contributes to IT band syndrome, knee pain, and lower back pain. The medius is trained with hip abduction and lateral band work.`,
    tips:[
      {icon:'✅',title:'Hip Thrust Outperforms Squats for Glutes',body:'EMG research consistently shows the hip thrust activates the gluteus maximus far more than the squat.'},
      {icon:'✅',title:'Full Hip Extension Matters',body:'Many exercises never reach full hip extension where the glutes fire maximally. Lockout completely on every rep.'},
      {icon:'⚠️',title:'Don\'t Quad-Dominant Squat',body:'Leaning too far forward turns squats into a quad exercise. More upright posture shifts to glutes.'},
      {icon:'⚠️',title:'Train the Medius',body:'Hip thrust trains maximus; lateral band walks and abductions train medius. Both are essential.'},
    ],
    exercises:{
      beginner:[
        {name:'Glute Bridge',type:'Bodyweight · Foundation',desc:'Lying on back, drive hips up and squeeze at the top. Master this before adding barbell.'},
        {name:'Lateral Band Walk',type:'Glute Medius · Activation',desc:'Loop a band above knees and side-step to activate the medius. Great as a warm-up exercise.'},
      ],
      intermediate:[
        {name:'Barbell Hip Thrust',type:'Isolation · Primary Mover',desc:'The single most effective glute exercise per EMG research. Full hip extension with locked-in squeeze.'},
        {name:'Romanian Deadlift',type:'Hip Hinge · Posterior Chain',desc:'Exceptional glute and hamstring developer through the hip hinge pattern.'},
        {name:'Cable Kickback',type:'Isolation · Extension Emphasis',desc:'Full hip extension under cable resistance hits the glute maximally in the contracted position.'},
        {name:'Step-Ups',type:'Unilateral · Functional',desc:'Drive through the heel to emphasize glutes. Can be loaded with dumbbells or barbell.'},
      ],
      advanced:[
        {name:'Banded Hip Thrust',type:'Accommodating Resistance',desc:'Band across hips increases resistance at peak contraction where glutes are strongest.'},
        {name:'Single-Leg Hip Thrust',type:'Unilateral · Advanced',desc:'Eliminates the dominant leg compensating and trains each glute independently.'},
      ]
    },
    videos:[
      {id:'YjdGhQz00Cs',label:'Hip Thrust Perfect Form',sub:'Setup and technique'},
      {id:'vHnpPNpWpM4',label:'Glute Training Science',sub:'EMG-based programming'},
    ]
  },
  'hamstrings': {
    name:'HAMSTRINGS', latin:'Biceps Femoris, Semitendinosus & Semimembranosus', color:'#c020d8', num:'06',
    tag:'POSTERIOR · LOWER BODY',
    group:'Legs',
    stats:{strength:82,mobility:60,endurance:70,size:78},
    facts:[
      {label:'Fiber Type',val:'Fast Twitch Dominant'},
      {label:'Primary Action',val:'Knee Flexion & Hip Extension'},
      {label:'Antagonist',val:'Quadriceps'},
      {label:'Recovery',val:'72 hrs'},
    ],
    about:`The hamstring group consists of three muscles: <strong>biceps femoris</strong> (long and short head), <strong>semitendinosus</strong>, and <strong>semimembranosus</strong>. All cross the knee joint (flexion) and all except the biceps femoris short head cross the hip joint (extension). They act as a critical brake during deceleration and power the push-off phase of running.`,
    about2:`Hamstring-to-quadriceps strength ratio imbalance is one of the most common predictors of sports injury. The <strong>biceps femoris long head</strong> is the most commonly strained muscle in all of sport — particularly in sprinting. The Nordic curl, which trains the eccentric strength of the hamstrings under full load, has been shown in research to reduce hamstring injuries by up to 50%.`,
    tips:[
      {icon:'✅',title:'Train Knee Flexion AND Hip Extension',body:'Leg curls target the knee flexion function; Romanian deadlifts target hip extension. Both are needed for complete hamstrings.'},
      {icon:'✅',title:'Nordic Curls for Injury Prevention',body:'Eccentric hamstring training (Nordic curls) reduces injury risk significantly. Every athlete should include them.'},
      {icon:'⚠️',title:'Hamstrings Are Prone to Tears',body:'Never sprint without warming up. The biceps femoris long head is especially vulnerable when cold.'},
      {icon:'⚠️',title:'Match Quad Training Volume',body:'For every set of quad work, include a set of hamstring work to prevent the knee-injury imbalance.'},
    ],
    exercises:{
      beginner:[
        {name:'Swiss Ball Leg Curl',type:'Bodyweight · Safe',desc:'Lie on back with feet on Swiss ball and curl it toward you. Excellent introduction to hamstring work.'},
        {name:'Romanian Deadlift',type:'Hip Hinge · Primary',desc:'The foundational hamstring exercise. Feel the stretch in the hamstrings as you hinge, not the lower back.'},
      ],
      intermediate:[
        {name:'Lying Leg Curl',type:'Isolation · Knee Flexion',desc:'The most direct hamstring isolation exercise. Dorsiflex the ankle (toes toward shin) for more activation.'},
        {name:'Nordic Curl',type:'Eccentric · Injury Prevention',desc:'The most demanding and protective hamstring exercise. Use progressions to build up.'},
        {name:'Good Morning',type:'Hip Hinge · Stretch Emphasis',desc:'Barbell on back, hinge forward. Excellent stretch position for the hamstrings.'},
        {name:'Sumo Deadlift',type:'Hip Dominant · Hamstrings',desc:'Wide stance and more upright torso shift emphasis toward hamstrings and glutes.'},
      ],
      advanced:[
        {name:'Glute-Ham Raise',type:'Full Hip Extension',desc:'One of the few exercises working both hamstring functions simultaneously. Elite strength indicator.'},
        {name:'Stiff-Leg Deadlift',type:'Maximum Stretch',desc:'Greater forward lean than RDL creates maximum hamstring length under load.'},
      ]
    },
    videos:[
      {id:'whNsdKeNmXk',label:'Hamstring Training Guide',sub:'Anatomy-based programming'},
      {id:'ehmhMIhEDak',label:'Romanian Deadlift Tutorial',sub:'Perfect form breakdown'},
    ]
  },
  'calves': {
    name:'CALVES', latin:'Gastrocnemius & Soleus', color:'#a010c0', num:'06',
    tag:'POSTERIOR · LOWER BODY',
    group:'Legs',
    stats:{strength:75,mobility:60,endurance:90,size:65},
    facts:[
      {label:'Fiber Type',val:'Slow Twitch Dominant'},
      {label:'Primary Action',val:'Plantar Flexion'},
      {label:'Antagonist',val:'Tibialis Anterior'},
      {label:'Recovery',val:'48 hrs'},
    ],
    about:`The calf complex consists of two main muscles: the <strong>gastrocnemius</strong> (two-headed, forming the visible bulge) and the deeper <strong>soleus</strong>. Both insert via the Achilles tendon — the thickest tendon in the body — into the heel bone. Plantar flexion (pointing the foot downward) is their primary shared action, propelling the body forward with every step.`,
    about2:`The <strong>gastrocnemius</strong> is fast-twitch dominant and best trained with straight-knee exercises for explosive power and size. The <strong>soleus</strong> is slow-twitch dominant and responds to bent-knee movements (seated calf raises) for endurance and thickness. Calves are notoriously difficult to develop due to high genetic variation in muscle belly length — longer bellies create larger calves regardless of training.`,
    tips:[
      {icon:'✅',title:'Full Range of Motion Essential',body:'Partial-range calf raises barely stimulate growth. Lower completely to maximum dorsiflexion for the full stretch.'},
      {icon:'✅',title:'Train Soleus with Bent Knee',body:'The gastrocnemius goes slack when the knee is bent. Seated calf raises are the only way to load the soleus.'},
      {icon:'⚠️',title:'Respect the Achilles Tendon',body:'The Achilles tendon has poor blood supply and heals slowly. Increase calf training volume gradually.'},
      {icon:'⚠️',title:'Don\'t Skip: Ankle Stability',body:'Weak calves contribute to ankle sprains. Include single-leg balance and calf raise progressions.'},
    ],
    exercises:{
      beginner:[
        {name:'Standing Calf Raise',type:'Bodyweight · Foundation',desc:'Step off a stair or plate edge for the full range. Hold the top contraction for 2 seconds.'},
        {name:'Seated Calf Raise',type:'Soleus · Bent Knee',desc:'With knees bent at 90°, this targets the soleus. Essential companion to standing raises.'},
      ],
      intermediate:[
        {name:'Weighted Standing Calf Raise',type:'Progressive Overload',desc:'Use a calf raise machine or smith machine for heavy loading through the full range.'},
        {name:'Donkey Calf Raise',type:'Bent Hip · Gastrocnemius Stretch',desc:'Hip flexion at 90° creates maximum gastrocnemius stretch. Extremely effective for size.'},
        {name:'Leg Press Calf Press',type:'Machine · Constant Tension',desc:'Allows heavy loading in a safe, controlled position through the full plantar flexion range.'},
        {name:'Single-Leg Calf Raise',type:'Unilateral · Balance',desc:'Doubles the load compared to bilateral raises. Also corrects left-right size imbalances.'},
      ],
      advanced:[
        {name:'Jump Rope',type:'Plyometric · Endurance',desc:'High-rep, high-frequency calf training that builds explosive plantar flexion strength.'},
        {name:'Tibialis Raise',type:'Antagonist Balance',desc:'Often neglected anterior tibialis strengthening prevents shin splints and improves ankle stability.'},
      ]
    },
    videos:[
      {id:'3DUQP1k9IhQ',label:'Calf Training Complete Guide',sub:'Anatomy and programming'},
      {id:'cDtmMcmXhRg',label:'Build Bigger Calves — Science',sub:'Genetics vs training factors'},
    ]
  },
};

// ═══════════════════════════════════
//  WORKOUT PLANS
// ═══════════════════════════════════
const workoutPlans = [
  { title:'PUSH DAY', subtitle:'Chest · Shoulders · Triceps',
    exercises:[
      {name:'Barbell Bench Press',sets:'4×6–8',muscle:'chest',muscleKey:'chest'},
      {name:'Overhead Press',sets:'3×8–10',muscle:'shoulders',muscleKey:'front-shoulder'},
      {name:'Incline DB Press',sets:'3×10–12',muscle:'chest',muscleKey:'chest'},
      {name:'Cable Lateral Raise',sets:'3×15',muscle:'shoulders',muscleKey:'front-shoulder'},
      {name:'Tricep Pushdown',sets:'3×12–15',muscle:'triceps',muscleKey:'triceps'},
      {name:'Overhead Extension',sets:'2×12',muscle:'triceps',muscleKey:'triceps'},
    ],
    note:'Rest 2–3 min between compound sets. 60–90s between isolation sets.'
  },
  { title:'PULL DAY', subtitle:'Back · Biceps · Rear Delts',
    exercises:[
      {name:'Pull-Ups / Chin-Ups',sets:'4×6–10',muscle:'back',muscleKey:'upper-back'},
      {name:'Barbell Row',sets:'4×6–8',muscle:'back',muscleKey:'upper-back'},
      {name:'Cable Seated Row',sets:'3×10–12',muscle:'back',muscleKey:'upper-back'},
      {name:'Face Pull',sets:'3×15–20',muscle:'rear delt',muscleKey:'rear-shoulder'},
      {name:'Barbell Curl',sets:'3×10–12',muscle:'biceps',muscleKey:'biceps'},
      {name:'Hammer Curl',sets:'2×12',muscle:'brachialis',muscleKey:'biceps'},
    ],
    note:'Pull all the way to chest on rows. Maintain scapular control throughout.'
  },
  { title:'LEGS DAY', subtitle:'Quads · Glutes · Hamstrings · Calves',
    exercises:[
      {name:'Back Squat',sets:'4×6–8',muscle:'quads/glutes',muscleKey:'quadriceps'},
      {name:'Romanian Deadlift',sets:'3×8–10',muscle:'hamstrings',muscleKey:'hamstrings'},
      {name:'Leg Press',sets:'3×12–15',muscle:'quads',muscleKey:'quadriceps'},
      {name:'Hip Thrust',sets:'3×10–12',muscle:'glutes',muscleKey:'glutes'},
      {name:'Leg Curl',sets:'3×12',muscle:'hamstrings',muscleKey:'hamstrings'},
      {name:'Standing Calf Raise',sets:'4×15–20',muscle:'calves',muscleKey:'calves'},
    ],
    note:'Squat depth minimum to parallel. Full range on all exercises.'
  },
  { title:'PUSH DAY 2', subtitle:'Upper Chest · Side Delts · Triceps',
    exercises:[
      {name:'Incline Barbell Press',sets:'4×8–10',muscle:'upper chest',muscleKey:'chest'},
      {name:'Arnold Press',sets:'3×10–12',muscle:'shoulders',muscleKey:'front-shoulder'},
      {name:'Cable Fly',sets:'3×12–15',muscle:'chest',muscleKey:'chest'},
      {name:'Lateral Raise',sets:'4×15',muscle:'side delts',muscleKey:'front-shoulder'},
      {name:'Close-Grip Bench',sets:'3×8–10',muscle:'triceps',muscleKey:'triceps'},
      {name:'Skull Crushers',sets:'2×12',muscle:'triceps',muscleKey:'triceps'},
    ],
    note:'Focus on mind-muscle connection over load on isolation exercises.'
  },
  { title:'PULL DAY 2', subtitle:'Lats · Mid Back · Biceps · Core',
    exercises:[
      {name:'Lat Pulldown',sets:'4×10–12',muscle:'lats',muscleKey:'upper-back'},
      {name:'T-Bar Row',sets:'3×8–10',muscle:'mid back',muscleKey:'upper-back'},
      {name:'Deadlift',sets:'3×5',muscle:'full back',muscleKey:'lower-back'},
      {name:'Reverse Fly',sets:'3×15',muscle:'rear delt',muscleKey:'rear-shoulder'},
      {name:'Incline Dumbbell Curl',sets:'3×12',muscle:'biceps',muscleKey:'biceps'},
      {name:'Ab Wheel Rollout',sets:'3×10',muscle:'core',muscleKey:'core'},
    ],
    note:'Deadlift with full focus on form. Reset between every rep if needed.'
  },
  { title:'ACTIVE RECOVERY', subtitle:'Mobility · Light Cardio · Stretching',
    exercises:[
      {name:'Hip Flexor Stretch',sets:'3×60s/side',muscle:'hip flexors',muscleKey:'glutes'},
      {name:'Thoracic Mobility',sets:'3×10 rotations',muscle:'mid back',muscleKey:'upper-back'},
      {name:'Calf Stretch',sets:'3×60s/side',muscle:'calves',muscleKey:'calves'},
      {name:'Band Pull-Aparts',sets:'3×20',muscle:'rear delt',muscleKey:'rear-shoulder'},
      {name:'Light Walking/Cycling',sets:'20–30 min',muscle:'cardio',muscleKey:'quadriceps'},
    ],
    note:'Keep intensity low — the goal is blood flow and mobility, not fatigue.'
  },
  { title:'REST DAY', subtitle:'Complete Recovery',
    exercises:[
      {name:'Sleep 7–9 Hours',sets:'Priority #1',muscle:'all muscles',muscleKey:'core'},
      {name:'Protein-Rich Meals',sets:'1.8–2.2g/kg',muscle:'recovery',muscleKey:'core'},
      {name:'Light Walking',sets:'Optional',muscle:'active recovery',muscleKey:'quadriceps'},
      {name:'Foam Rolling',sets:'10–15 min',muscle:'any tight areas',muscleKey:'upper-back'},
    ],
    note:'Rest days are when muscles grow. Nutrition and sleep are as important as training.'
  },
];

// ═══════════════════════════════════
//  COMPARE DATA
// ═══════════════════════════════════
const compareOptions = [
  {key:'chest',label:'Chest — Pectoralis'},
  {key:'front-shoulder',label:'Front Shoulder — Anterior Deltoid'},
  {key:'rear-shoulder',label:'Rear Shoulder — Posterior Deltoid'},
  {key:'upper-back',label:'Upper Back — Lats & Traps'},
  {key:'lower-back',label:'Lower Back — Erectors'},
  {key:'biceps',label:'Biceps — Biceps Brachii'},
  {key:'triceps',label:'Triceps — Triceps Brachii'},
  {key:'core',label:'Core — Rectus Abdominis'},
  {key:'forearm',label:'Forearm — Brachioradialis'},
  {key:'quadriceps',label:'Quadriceps — Quads'},
  {key:'glutes',label:'Glutes — Gluteus Maximus'},
  {key:'hamstrings',label:'Hamstrings — Biceps Femoris'},
  {key:'calves',label:'Calves — Gastrocnemius'},
];

// Populate compare selects
function initCompare(){
  ['compareA','compareB'].forEach(id => {
    const sel = document.getElementById(id);
    compareOptions.forEach(opt => {
      const o = document.createElement('option');
      o.value = opt.key; o.textContent = opt.label;
      sel.appendChild(o);
    });
  });
}

function updateCompare(){
  const keyA = document.getElementById('compareA').value;
  const keyB = document.getElementById('compareB').value;
  const res = document.getElementById('compareResult');
  if(!keyA || !keyB){
    res.innerHTML = '<div class="compare-placeholder">Select two muscles to compare</div>';
    return;
  }
  const a = muscleData[keyA], b = muscleData[keyB];
  if(!a || !b) return;
  res.innerHTML = [a,b].map((d,i)=>`
    <div class="compare-col">
      <div class="compare-col-header">
        <div class="compare-col-name" style="color:${d.color}">${d.name}</div>
        <div class="compare-col-latin">${d.latin}</div>
      </div>
      ${['strength','mobility','endurance','size'].map(stat=>`
        <div class="compare-stat-row">
          <span class="compare-stat-label">${stat}</span>
          <div class="compare-bar"><div class="compare-fill" style="background:${d.color};width:0%" data-width="${d.stats[stat]}%"></div></div>
          <span class="compare-val" style="color:${d.color}">${d.stats[stat]}%</span>
        </div>
      `).join('')}
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border)">
        <p style="font-size:12px;line-height:1.8;color:var(--muted2)">${d.about.replace(/<[^>]+>/g,' ').slice(0,220)}...</p>
      </div>
      <div style="margin-top:16px;">
        <button class="btn-primary" style="font-size:10px;padding:10px 20px;" onclick="openDetail('${i===0?keyA:keyB}')">Full Details →</button>
      </div>
    </div>
  `).join('');
  // Animate bars
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      res.querySelectorAll('.compare-fill').forEach(el=>{
        el.style.width = el.dataset.width;
      });
    });
  });
}

// ═══════════════════════════════════
//  WORKOUT PLANNER
// ═══════════════════════════════════
function initPlanner(){
  renderDay(0);
  document.querySelectorAll('.day-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.day-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderDay(parseInt(btn.dataset.day));
    });
  });
}

function renderDay(idx){
  const plan = workoutPlans[idx];
  const card = document.getElementById('plannerCard');
  const colors = ['#e82662','#2662e8','#d426e8','#e85d26','#26e8a6','#e8c426','#a010c0'];
  const color = colors[idx % colors.length];
  card.style.borderLeftColor = color;
  card.innerHTML = `
    <div class="plan-day-title" style="color:${color}">${plan.title}</div>
    <p style="font-size:11px;letter-spacing:2px;color:var(--muted);margin-bottom:20px;text-transform:uppercase">${plan.subtitle}</p>
    <div class="plan-exercise-list">
      ${plan.exercises.map(ex=>`
        <div class="plan-ex" onclick="openDetail('${ex.muscleKey}')">
          <span class="plan-ex-name">${ex.name}</span>
          <span class="plan-ex-muscle" style="background:${color}18;color:${color}">${ex.muscle}</span>
          <span class="plan-ex-sets">${ex.sets}</span>
        </div>
      `).join('')}
    </div>
    <p class="plan-note">${plan.note}</p>
  `;
}

// ═══════════════════════════════════
//  DETAIL MODAL
// ═══════════════════════════════════
let currentKey = null;
function openDetail(key){
  const d = muscleData[key];
  if(!d) return;
  currentKey = key;

  // Style variables
  document.getElementById('detailHeroBand').style.setProperty('--dcolor',d.color);
  document.getElementById('detailHeroNum').textContent = d.num || '';
  document.getElementById('detailTag').textContent = d.tag;
  document.getElementById('detailTag').style.cssText = `background:${d.color}18;color:${d.color};`;
  document.getElementById('detailName').textContent = d.name;
  document.getElementById('detailName').style.color = d.color;
  document.getElementById('detailLatin').textContent = d.latin;
  document.getElementById('detailStatRow').innerHTML = [
    {label:'Group',val:d.group||''},
    {label:'Strength',val:d.stats.strength+'%'},
    {label:'Mobility',val:d.stats.mobility+'%'},
    {label:'Endurance',val:d.stats.endurance+'%'},
  ].map(s=>`<div class="detail-stat-pill"><div class="detail-stat-dot" style="background:${d.color}"></div>${s.label}: <strong style="color:var(--text)">${s.val}</strong></div>`).join('');

  // Body content
  document.getElementById('detailBody').innerHTML = `
    <!-- ABOUT -->
    <div class="detail-section">
      <div class="detail-section-label"><span class="icon">📋</span> About This Muscle</div>
      <div class="detail-intro-grid">
        <p class="detail-para">${d.about}</p>
        <p class="detail-para">${d.about2}</p>
      </div>
      <div class="detail-facts-strip">
        ${d.facts.map(f=>`<div class="detail-fact"><div class="detail-fact-label">${f.label}</div><div class="detail-fact-val" style="color:${d.color}">${f.val}</div></div>`).join('')}
      </div>
    </div>

    <!-- STATS -->
    <div class="detail-section">
      <div class="detail-section-label"><span class="icon">📊</span> Muscle Statistics</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
        ${Object.entries(d.stats).map(([k,v])=>`
          <div>
            <div class="detail-fact-label" style="margin-bottom:8px">${k.charAt(0).toUpperCase()+k.slice(1)}</div>
            <div style="height:3px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden;margin-bottom:4px">
              <div style="height:100%;background:${d.color};width:${v}%;transition:width 1.2s ease;border-radius:2px"></div>
            </div>
            <div style="font-family:'Bebas Neue',sans-serif;font-size:18px;color:${d.color}">${v}%</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TIPS & MISTAKES -->
    <div class="detail-section">
      <div class="detail-section-label"><span class="icon">💡</span> Form Tips & Common Mistakes</div>
      <div class="tips-list">
        ${d.tips.map(t=>`
          <div class="tip-row">
            <div class="tip-row-icon">${t.icon}</div>
            <div>
              <div class="tip-row-title">${t.title}</div>
              <div class="tip-row-body">${t.body}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- EXERCISES BY LEVEL -->
    <div class="detail-section">
      <div class="detail-section-label"><span class="icon">🏋️</span> Exercises by Level</div>
      <div class="ex-level-group">
        <div class="ex-level-badge badge-beginner">● Beginner</div>
        <div class="ex-cards-grid">
          ${d.exercises.beginner.map(ex=>`
            <div class="ex-card" style="--dcolor:${d.color}">
              <div class="ex-card-name">${ex.name}</div>
              <div class="ex-card-type">${ex.type}</div>
              <div class="ex-card-desc">${ex.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="ex-level-group">
        <div class="ex-level-badge badge-intermediate">● Intermediate</div>
        <div class="ex-cards-grid">
          ${d.exercises.intermediate.map(ex=>`
            <div class="ex-card" style="--dcolor:${d.color}">
              <div class="ex-card-name">${ex.name}</div>
              <div class="ex-card-type">${ex.type}</div>
              <div class="ex-card-desc">${ex.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="ex-level-group">
        <div class="ex-level-badge badge-advanced">● Advanced</div>
        <div class="ex-cards-grid">
          ${d.exercises.advanced.map(ex=>`
            <div class="ex-card" style="--dcolor:${d.color}">
              <div class="ex-card-name">${ex.name}</div>
              <div class="ex-card-type">${ex.type}</div>
              <div class="ex-card-desc">${ex.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- VIDEO GUIDES -->
    <div class="detail-section">
      <div class="detail-section-label"><span class="icon">🎬</span> Video Guides</div>
      <div class="guide-videos-grid">
        ${d.videos.map(v=>`
          <div>
            <div class="guide-video-embed">
              <iframe src="https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1" allowfullscreen allow="autoplay; encrypted-media" loading="lazy"></iframe>
            </div>
            <div class="guide-video-label">${v.label}</div>
            <div class="guide-video-sub">${v.sub||''}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.getElementById('detailOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('detailPanel').scrollTop = 0;
}

function closeDetail(){
  document.getElementById('detailOverlay').classList.remove('open');
  document.body.style.overflow = '';
  // Stop iframes
  document.querySelectorAll('.guide-video-embed iframe').forEach(iframe=>{
    iframe.src = iframe.src;
  });
  currentKey = null;
}

function handleOverlayClick(e){
  if(e.target === document.getElementById('detailOverlay')) closeDetail();
}

// ═══════════════════════════════════
//  FILTER BUTTONS
// ═══════════════════════════════════
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.muscle-card').forEach(card=>{
      if(filter === 'all' || card.dataset.cat === filter){
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ═══════════════════════════════════
//  SEARCH
// ═══════════════════════════════════
const searchIndex = Object.entries(muscleData).map(([key,d])=>({
  key, name:d.name, latin:d.latin, color:d.color, group:d.group,
  text:(d.name+' '+d.latin+' '+d.group+' '+(d.exercises.beginner.concat(d.exercises.intermediate,d.exercises.advanced).map(e=>e.name).join(' '))).toLowerCase()
}));

function openSearch(){
  document.getElementById('searchOverlay').classList.add('open');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
  setTimeout(()=>document.getElementById('searchInput').focus(),100);
}
function closeSearch(){
  document.getElementById('searchOverlay').classList.remove('open');
}
function handleSearchOverlayClick(e){
  if(e.target===document.getElementById('searchOverlay')) closeSearch();
}
function doSearch(){
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const res = document.getElementById('searchResults');
  if(!q){ res.innerHTML=''; return; }
  const results = searchIndex.filter(item=>item.text.includes(q)).slice(0,8);
  if(!results.length){ res.innerHTML='<div class="search-empty">No results found</div>'; return; }
  res.innerHTML = results.map(r=>`
    <div class="search-result-item" onclick="closeSearch();openDetail('${r.key}')">
      <div class="sr-dot" style="background:${r.color}"></div>
      <div class="sr-name" style="color:${r.color}">${r.name}</div>
      <div class="sr-latin">${r.latin}</div>
    </div>
  `).join('');
}

// ═══════════════════════════════════
//  CURSOR
// ═══════════════════════════════════
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX; my=e.clientY;
  cursor.style.left=(mx-4)+'px'; cursor.style.top=(my-4)+'px';
});
function animateCursorRing(){
  rx+=(mx-rx-16)*0.12; ry+=(my-ry-16)*0.12;
  cursorRing.style.left=rx+'px'; cursorRing.style.top=ry+'px';
  requestAnimationFrame(animateCursorRing);
}
animateCursorRing();
const hoverEls = 'a, button, .muscle-card, .legend-btn, .muscle-hotspot, .muscle-region, .plan-ex, .ex-card, .tip-row, .legend-btn';
document.addEventListener('mouseover',e=>{
  if(e.target.closest(hoverEls)){ cursorRing.style.width='52px'; cursorRing.style.height='52px'; cursorRing.style.borderColor='rgba(240,192,64,0.9)'; }
});
document.addEventListener('mouseout',e=>{
  if(e.target.closest(hoverEls)){ cursorRing.style.width='32px'; cursorRing.style.height='32px'; cursorRing.style.borderColor='rgba(240,192,64,0.5)'; }
});

// ═══════════════════════════════════
//  PROGRESS BAR
// ═══════════════════════════════════
window.addEventListener('scroll',()=>{
  const st = document.documentElement.scrollTop;
  const dh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById('progressBar').style.width = (st/dh*100)+'%';
  // Nav compact
  document.getElementById('mainNav').classList.toggle('scrolled',st>60);
  // Active nav
  let current='';
  document.querySelectorAll('section[id]').forEach(s=>{ if(window.scrollY>=s.offsetTop-130) current=s.id; });
  document.querySelectorAll('.nav-links a').forEach(a=>{ a.classList.toggle('active',a.getAttribute('href')==='#'+current); });
});

// ═══════════════════════════════════
//  SCROLL REVEAL / STAT BARS
// ═══════════════════════════════════
const revealObs = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.stat-fill').forEach(bar=>{
        setTimeout(()=>{ bar.style.width=bar.dataset.width; },250);
      });
    }
  });
},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});

document.querySelectorAll('.reveal,.func-card,.tip-card,.muscle-card').forEach(el=>revealObs.observe(el));
document.querySelectorAll('.func-card').forEach((c,i)=>{ c.style.transitionDelay=`${i*0.07}s`; });
document.querySelectorAll('.tip-card').forEach((c,i)=>{ c.style.transitionDelay=`${i*0.09}s`; });

// ═══════════════════════════════════
//  KEYBOARD
// ═══════════════════════════════════
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(document.getElementById('detailOverlay').classList.contains('open')) closeDetail();
    else if(document.getElementById('searchOverlay').classList.contains('open')) closeSearch();
  }
  if((e.ctrlKey||e.metaKey)&&e.key==='k'){ e.preventDefault(); openSearch(); }
});

// ═══════════════════════════════════
//  SMOOTH SCROLL
// ═══════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const t=document.querySelector(a.getAttribute('href'));
    if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// ═══════════════════════════════════
//  MOBILE MENU
// ═══════════════════════════════════
function toggleMobileMenu(){
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobileMenu(){
  document.getElementById('mobileMenu').classList.remove('open');
}

// ═══════════════════════════════════
//  INTRO
// ═══════════════════════════════════
setTimeout(()=>{ const o=document.getElementById('introOverlay'); if(o){ o.style.display='none'; } },3100);

// ═══════════════════════════════════
//  INIT
// ═══════════════════════════════════
initCompare();
initPlanner();
