import React, { useEffect, useState } from "react"

interface CaptionListtingProps {
    data?: any[] | null | undefined;
    autoScoll?: boolean;
}


const listItem = (data: any) => {
    return (<>
        {(data?.length ?? 0) > 0 && data?.map((res: any, index: number) => {
            const start = res?.start
            const end = res?.end
            return (
                <p key={index}>
                    <span className="youtube-marker" data-start={start} data-end={end}>{res?.text}</span>

                </p>
            )
        })}
    </>)
}

var scroll: any;

function CaptionListting({ data, autoScoll }: CaptionListtingProps) {


    useEffect(() => {
        console.log(autoScoll, 'asasasa');


        if (autoScoll) {
            scroll = setInterval(() => {
                document.getElementsByClassName('youtube-marker-current')[0]?.scrollIntoView({ behavior: 'smooth' })
            }, 1000)

        } else {

            clearInterval(scroll)
            scroll = null
        }

    }, [autoScoll])


    return (
        <div>
            <div className="youtube-transcript">
                <div id="youtube-transcript-#1" className="youtube-transcription">

                    {/* === un-comment this === */}
                    {listItem(data)}

                    {/* ===comment  all below p tags === */}
                    {!data && <>
                        <p><span className="youtube-marker" data-start="9.003" data-end="11.065">Hi everyone.</span></p>
                        <p><span className="youtube-marker" data-start="11.825" data-end="16.625">Two year ago, my life
                            changed
                            forever.</span></p>
                        <p><span className="youtube-marker" data-start="16.625" data-end="19.261">My wife Kelsey and
                            I</span> <span className="youtube-marker" data-start="19.261"
                                data-end="23.032">welcomed our daughter Lelainto the
                                world.</span></p>
                        <p><span className="youtube-marker" data-start="23.033" data-end="27.456">Now, becoming a parentis
                            an amazing
                            experience.</span></p>
                        <p><span className="youtube-marker" data-start="27.456" data-end="30.704">Your whole world changes
                            over
                            night.</span></p>
                        <p><span className="youtube-marker" data-start="30.704" data-end="33.285">And all of your
                            prioritieschange
                            immediately.</span></p>
                        <p><span className="youtube-marker" data-start="33.285" data-end="39.294">So fast that it makes it
                            really
                            difficultto process sometimes.</span></p>
                        <p><span className="youtube-marker" data-start="39.294" data-end="43.547">Now, you also have to
                            learna
                            tremendous amount about being a parent</span> <span className="youtube-marker"
                                data-start="43.547" data-end="46.82">like, for example,how to dress your
                                child.</span></p>
                        <p><span className="youtube-marker" data-start="46.82" data-end="47.954">(Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="47.954" data-end="50.091">This was new to me.</span>
                        </p>
                        <p><span className="youtube-marker" data-start="50.091" data-end="53.844">This is an actual outfit,I
                            thought
                            this was a good idea.</span></p>
                        <p><span className="youtube-marker" data-start="53.844" data-end="59.558">And even Lela knowsthat
                            its not a
                            good idea. (Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="59.558" data-end="64.409">So there is so much to
                            learn andso
                            much craziness all at once.</span></p>
                        <p><span className="youtube-marker" data-start="64.409" data-end="68.533">And to add to the
                            craziness,Kelsey and
                            I both work from home,</span> <span className="youtube-marker" data-start="68.533"
                                data-end="71.223">were entrepreneurs,we run our own businesses.</span></p>
                        <p><span className="youtube-marker" data-start="71.223" data-end="76.992">So, Kelsey develops
                            coursesonline for
                            yoga teachers.</span></p>
                        <p><span className="youtube-marker" data-start="76.992" data-end="78.333">Im an author.</span></p>
                        <p><span className="youtube-marker" data-start="78.333" data-end="80.782">And so, Im working from
                            home,Kelseys
                            working from home.</span></p>
                        <p><span className="youtube-marker" data-start="80.782" data-end="83.901">We have an infantand were
                            trying to
                            make sure</span> <span className="youtube-marker" data-start="83.901"
                                data-end="86.725">that everything
                                gets donethat needs done.</span></p>
                        <p><span className="youtube-marker" data-start="86.725" data-end="91.107">And life is really, really
                            busy.</span></p>
                        <p><span className="youtube-marker" data-start="92.357" data-end="96.718">And a couple of weeksinto
                            this amazing
                            experience,</span> <span className="youtube-marker" data-start="96.718"
                                data-end="100.247">when the
                                sleep deprivationreally kicked in,</span> <span className="youtube-marker"
                                    data-start="100.247" data-end="102.299">like around week eight,</span> <span
                                        className="youtube-marker" data-start="102.299" data-end="105.732">I had this
                                thought,and it was the same thought</span> <span className="youtube-marker"
                                    data-start="105.732" data-end="109.773">that parents across the
                                ages,internationally,</span> <span className="youtube-marker" data-start="109.773"
                                    data-end="112.467">everybody has had this thought,which is:</span> <span
                                        className="youtube-marker" data-start="112.467" data-end="118.054">I am never going
                                to havefree time ever again.</span></p>
                        <p><span className="youtube-marker" data-start="118.054" data-end="119.183">(Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="119.183" data-end="122.403">Somebody said its
                            true.</span></p>
                        <p><span className="youtube-marker" data-start="122.403" data-end="125.214">Its not exactly
                            true,</span> <span className="youtube-marker" data-start="125.214"
                                data-end="129.865">but it feels really, really truein
                                that moment.</span></p>
                        <p><span className="youtube-marker" data-start="129.866" data-end="132.075">And this was
                            reallydisconcerning to
                            me,</span> <span className="youtube-marker" data-start="132.075"
                                data-end="135.483">because one of the
                                things that I enjoy</span> <span className="youtube-marker" data-start="135.484"
                                    data-end="139.428">more
                                than anything elseis learning new things.</span></p>
                        <p><span className="youtube-marker" data-start="139.428" data-end="142.261">Getting curious about
                            somethingand
                            diving in</span> <span className="youtube-marker" data-start="142.261"
                                data-end="145.164">and fiddling
                                around andlearning through trial and error.</span></p>
                        <p><span className="youtube-marker" data-start="145.164" data-end="148.44">And eventually becoming
                            pretty goodat
                            something.</span></p>
                        <p><span className="youtube-marker" data-start="148.44" data-end="152.335">And without this free
                            time,</span>
                            <span className="youtube-marker" data-start="152.336" data-end="156.405">I didnt know how I
                                was evergoing
                                to do that ever again.</span>
                        </p>
                        <p><span className="youtube-marker" data-start="156.405" data-end="158.877">And so, Im a big
                            geek,</span> <span className="youtube-marker" data-start="158.877"
                                data-end="162.07">I want to keep learning things,I want
                                to keep growing.</span></p>
                        <p><span className="youtube-marker" data-start="162.07" data-end="165.087">And so what Ive decided
                            to do
                            was,</span> <span className="youtube-marker" data-start="165.087"
                                data-end="167.784">go to the
                                library,and go to the bookstore,</span> <span className="youtube-marker"
                                    data-start="167.784" data-end="169.922">and look at what research says
                                about</span> <span className="youtube-marker" data-start="169.922"
                                    data-end="173.523">how we learn and how we learn quickly.</span></p>
                        <p><span className="youtube-marker" data-start="173.523" data-end="176.834">And I read a bunch of
                            books,I read a
                            bunch of websites.</span></p>
                        <p><span className="youtube-marker" data-start="176.834" data-end="179.091">And tried to answer this
                            question,</span> <span className="youtube-marker" data-start="179.091"
                                data-end="183.04">how long does
                                it taketo acquire a new skill?</span></p>
                        <p><span className="youtube-marker" data-start="183.04" data-end="185.117">You know what I
                            found?</span></p>
                        <p><span className="youtube-marker" data-start="185.117" data-end="189.438">10,000 hours!</span></p>
                        <p><span className="youtube-marker" data-start="189.438" data-end="191.2">Anybody ever heard
                            this?</span></p>
                        <p><span className="youtube-marker" data-start="191.2" data-end="194.134">It takes 10,000 hours.If
                            you want to
                            learn something new,</span> <span className="youtube-marker" data-start="194.134"
                                data-end="195.573">if
                                you want to be good at it,</span> <span className="youtube-marker"
                                    data-start="195.584" data-end="197.934">its going to take 10,000 hoursto get
                                there.</span></p>
                        <p><span className="youtube-marker" data-start="197.934" data-end="201.454">And I read this in book
                            after
                            book,in website after website.</span></p>
                        <p><span className="youtube-marker" data-start="201.455" data-end="208.421">And my mental
                            experienceof reading
                            all of this stuff was like:</span> <span className="youtube-marker"
                                data-start="208.421" data-end="210.798">No!!</span></p>
                        <p><span className="youtube-marker" data-start="210.799" data-end="214.539">I dont have time!I
                            dont have
                            10,000 hours.</span></p>
                        <p><span className="youtube-marker" data-start="214.539" data-end="219.088">I am never going to be
                            ableto learn
                            anything new.</span></p>
                        <p><span className="youtube-marker" data-start="219.088" data-end="222.421">Ever
                            again.(Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="222.421" data-end="223.478">But thats not
                            true.</span></p>
                        <p><span className="youtube-marker" data-start="223.479" data-end="226.559">So, 10,000 hours, just
                            to give youa
                            rough order of magnitude,</span> <span className="youtube-marker"
                                data-start="226.559" data-end="232.422">10,000 hours is a full-time jobfor five
                                years.</span></p>
                        <p><span className="youtube-marker" data-start="232.422" data-end="234.008">Thats a long
                            time.</span></p>
                        <p><span className="youtube-marker" data-start="234.008" data-end="236.364">And weve all had the
                            experienceof
                            learning something new,</span> <span className="youtube-marker" data-start="236.364"
                                data-end="240.439">and it didnt take us anywhereclose to that amount of time,
                                right?</span></p>
                        <p><span className="youtube-marker" data-start="240.439" data-end="243.505">So, whats up? Theres
                            somethingkinda funky going on here.</span></p>
                        <p><span className="youtube-marker" data-start="243.505" data-end="247.078">What the research says
                            and what we
                            expect,and have experiences,</span> <span className="youtube-marker"
                                data-start="247.078" data-end="249.416">they dont match up.</span></p>
                        <p><span className="youtube-marker" data-start="249.416" data-end="252.993">And what I found, heres
                            the
                            wrinkle:</span> <span className="youtube-marker" data-start="252.993"
                                data-end="259.721">The 10,000 hour
                                rule came out of studiesof expert-level performance.</span></p>
                        <p><span className="youtube-marker" data-start="259.721" data-end="262.227">Theres a professorat
                            Florida State
                            University,</span> <span className="youtube-marker" data-start="262.228"
                                data-end="264.226">his name is
                                K. Anders Ericsson.</span></p>
                        <p><span className="youtube-marker" data-start="264.226" data-end="266.725">He is the originatorof
                            the 10,00
                            hour rule.</span></p>
                        <p><span className="youtube-marker" data-start="266.725" data-end="271.261">And where that came from
                            is,he
                            studied professional athletes,</span> <span className="youtube-marker"
                                data-start="271.261" data-end="275.763">world className musicians,chess grand
                                masters.</span></p>
                        <p><span className="youtube-marker" data-start="275.763" data-end="280.775">All of this ultra
                            competitive
                            folksin ultra-high performing fields.</span></p>
                        <p><span className="youtube-marker" data-start="280.775" data-end="283.751">And he tried to figure
                            outhow long
                            does it take</span> <span className="youtube-marker" data-start="283.751"
                                data-end="286.811">to get to
                                the topof those kinds of fields.</span></p>
                        <p><span className="youtube-marker" data-start="286.811" data-end="289.668">And what he found is,the
                            more
                            deliberate practice,</span> <span className="youtube-marker" data-start="289.668"
                                data-end="292.194">the
                                more timethat those individuals spend</span> <span className="youtube-marker"
                                    data-start="292.194" data-end="295.304">practicing the elementsof whatever it is
                                that they do,</span> <span className="youtube-marker" data-start="295.304"
                                    data-end="297.246">the more time you spend,the better
                                you get.</span></p>
                        <p><span className="youtube-marker" data-start="297.246" data-end="300.164">And the folks at the
                            tippy topof
                            their fields</span> <span className="youtube-marker" data-start="300.165"
                                data-end="305.101">put in
                                around 10,000 hours of practice.</span></p>
                        <p><span className="youtube-marker" data-start="305.101" data-end="309.442">Now, we were talking
                            about the
                            gameof telephone a little bit earlier.</span></p>
                        <p><span className="youtube-marker" data-start="309.442" data-end="311.236">Heres what
                            happened:</span> <span className="youtube-marker" data-start="311.236"
                                data-end="313.457">an author by the nameof Malcolm
                                Gladwell</span> <span className="youtube-marker" data-start="313.458"
                                    data-end="317.901">wrote a book in
                                2007 called Outliers: The Story of Success,</span> <span className="youtube-marker"
                                    data-start="317.901" data-end="321.592">and the central piece of that bookwas
                                the 10,000 hour
                                rule.</span></p>
                        <p><span className="youtube-marker" data-start="321.592" data-end="325.642">Practice a lot, practice
                            well,and
                            you will do extremely well,</span> <span className="youtube-marker"
                                data-start="325.642" data-end="327.367">you will reach the top of your
                                field.</span></p>
                        <p><span className="youtube-marker" data-start="327.367" data-end="329.472">So, the message,</span>
                            <span className="youtube-marker" data-start="329.472" data-end="332.455">what Dr. Ericsson
                                was actually saying
                                is,</span> <span className="youtube-marker" data-start="332.455"
                                    data-end="337.425">it takes 10,000
                                hours to getat the top of an ultra competitive field</span> <span
                                    className="youtube-marker" data-start="337.425" data-end="341.857">in a very narrow
                                subject,thats what that means.</span></p>
                        <p><span className="youtube-marker" data-start="341.857" data-end="345.294">But heres what
                            happened:ever since
                            Outliers came out,</span> <span className="youtube-marker" data-start="345.294"
                                data-end="347.448">immediately came out,reached the top of best seller
                                lists,</span> <span className="youtube-marker" data-start="347.449"
                                    data-end="350.056">stayed there for three solid
                                months.</span></p>
                        <p><span className="youtube-marker" data-start="350.056" data-end="354.171">All of a sudden the
                            10,000 hour
                            rulewas everywhere.</span></p>
                        <p><span className="youtube-marker" data-start="354.171" data-end="360.022">And a society-wide game
                            of
                            telephonestarted to be played.</span></p>
                        <p><span className="youtube-marker" data-start="360.022" data-end="364.955">So this message, it
                            takes 10,000
                            hoursto reach the top of an ultra competitive field,</span> <span
                                className="youtube-marker" data-start="364.955" data-end="369.926">became, it takes
                                10,000 hoursto become an expert at
                                something,</span> <span className="youtube-marker" data-start="369.927"
                                    data-end="371.366">which
                                became,</span> <span className="youtube-marker" data-start="371.366"
                                    data-end="375.667">it takes 10,000
                                hours to becomegood at something,</span> <span className="youtube-marker"
                                    data-start="375.667" data-end="377.191">which became,</span> <span
                                        className="youtube-marker" data-start="377.192" data-end="381.455">it takes 10,000
                                hoursto learn something.</span></p>
                        <p><span className="youtube-marker" data-start="381.455" data-end="385.337">But that last
                            statement,it takes
                            10,000 hours to learn something,</span> <span className="youtube-marker"
                                data-start="385.337" data-end="388.599">is not true.Its not true.</span></p>
                        <p><span className="youtube-marker" data-start="388.6" data-end="393.346">So, what the research
                            actually says
                            --</span> <span className="youtube-marker" data-start="393.346" data-end="396.217">I
                                spent a lot of time
                                hereat the CSU library</span> <span className="youtube-marker" data-start="396.217"
                                    data-end="399.522">in the cognitive psychology stackscause Im a geek.</span>
                        </p>
                        <p><span className="youtube-marker" data-start="399.523" data-end="404.216">And when you actually
                            lookat the
                            studies of skill acquisition,</span> <span className="youtube-marker"
                                data-start="404.216" data-end="408.039">you see over and overa graph like
                                this.</span></p>
                        <p><span className="youtube-marker" data-start="408.039" data-end="411.693">Now, researchers,whether
                            theyre
                            studying a motor skill,</span> <span className="youtube-marker" data-start="411.694"
                                data-end="414.328">something you do physicallyor a mental skill,</span> <span
                                    className="youtube-marker" data-start="414.328" data-end="417.174">they like to
                                study thingsthat they can time.</span></p>
                        <p><span className="youtube-marker" data-start="417.174" data-end="419.185">Cause you can quantify
                            that,
                            right?</span></p>
                        <p><span className="youtube-marker" data-start="419.185" data-end="422.452">So, theyll give
                            research
                            participantsa little task,</span> <span className="youtube-marker"
                                data-start="422.452" data-end="424.156">something that requiresphysical
                                arrangement,</span> <span className="youtube-marker" data-start="424.156"
                                    data-end="428.925">or something that requireslearning a little mental
                                trick,</span> <span className="youtube-marker" data-start="428.925"
                                    data-end="433.357">and theyll time
                                how long a participanttakes to complete the skill.</span></p>
                        <p><span className="youtube-marker" data-start="433.357" data-end="436.095">And heres what this
                            graph says,when
                            you start --</span> <span className="youtube-marker" data-start="436.095"
                                data-end="440.398">so when
                                researchers gave participantsa task, it took them a really long time,</span>
                            <span className="youtube-marker" data-start="440.398" data-end="443.053">cause it was
                                newand they were
                                horrible.</span></p>
                        <p><span className="youtube-marker" data-start="443.053" data-end="446.651">With a little bit of
                            practice,they
                            get better and better and better.</span></p>
                        <p><span className="youtube-marker" data-start="446.651" data-end="450.632">And that early part of
                            practiceis
                            really, really efficient.</span></p>
                        <p><span className="youtube-marker" data-start="450.632" data-end="456.021">People get good at
                            thingswith just a
                            little bit of practice.</span></p>
                        <p><span className="youtube-marker" data-start="456.021" data-end="459.663">Now, whats interesting
                            to note is
                            that,</span> <span className="youtube-marker" data-start="459.663"
                                data-end="462.869">for skills that we
                                want to learnfor ourselves,</span> <span className="youtube-marker"
                                    data-start="462.869" data-end="465.736">we dont care so much about
                                time,right?</span></p>
                        <p><span className="youtube-marker" data-start="465.736" data-end="469.283">We just care about how
                            good we
                            are,whatever good happens to mean.</span></p>
                        <p><span className="youtube-marker" data-start="469.283" data-end="474.943">So if we relabel
                            performance timeto
                            how good you are,</span> <span className="youtube-marker" data-start="474.943"
                                data-end="479.346">the
                                graph flips, and you gethis famous and widely known,</span> <span
                                    className="youtube-marker" data-start="479.346" data-end="481.274">this is the
                                learning curve.</span></p>
                        <p><span className="youtube-marker" data-start="481.274" data-end="483.852">And the story of the
                            learning
                            curveis when you start,</span> <span className="youtube-marker" data-start="483.852"
                                data-end="486.566">youre grossly incompetentand you know it, right?</span></p>
                        <p><span className="youtube-marker" data-start="486.567" data-end="488.635">(Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="488.635" data-end="491.997">With a little bit of
                            practice,you
                            get really good, really quick.</span></p>
                        <p><span className="youtube-marker" data-start="491.997" data-end="495.715">So that early level of
                            improvementis
                            really fast.</span></p>
                        <p><span className="youtube-marker" data-start="495.715" data-end="498.63">And then at a certain
                            pointyou reach
                            a plateau,</span> <span className="youtube-marker" data-start="498.63"
                                data-end="501.96">and the
                                subsequent gamesbecome much harder to get,</span> <span className="youtube-marker"
                                    data-start="501.96" data-end="504.659">they take more time to get.</span></p>
                        <p><span className="youtube-marker" data-start="504.659" data-end="508.62">Now, my question is,I
                            want that,
                            right?</span></p>
                        <p><span className="youtube-marker" data-start="508.62" data-end="511.605">How long does it takefrom
                            starting
                            something</span> <span className="youtube-marker" data-start="511.605"
                                data-end="515.265">and being
                                grossly incompetentand knowing it</span> <span className="youtube-marker"
                                    data-start="515.265" data-end="517.574">to being reasonably good?</span></p>
                        <p><span className="youtube-marker" data-start="517.575" data-end="522.329">In hopefully, as short a
                            period of
                            timeas possible.</span></p>
                        <p><span className="youtube-marker" data-start="522.328" data-end="524.539">So, how long does that
                            take?</span>
                        </p>
                        <p><span className="youtube-marker" data-start="524.539" data-end="529.518">Heres what my research
                            says: 20
                            hours.</span></p>
                        <p><span className="youtube-marker" data-start="529.518" data-end="533.163">Thats it.You can go
                            from knowing
                            nothing</span> <span className="youtube-marker" data-start="533.163"
                                data-end="535.739">about any skill
                                that you can think of.</span></p>
                        <p><span className="youtube-marker" data-start="535.739" data-end="539.175">Want to learn a
                            language?Want to
                            learn how to draw?</span></p>
                        <p><span className="youtube-marker" data-start="539.175" data-end="542.294">Want to learn how to
                            juggleflaming
                            chainsaws?</span></p>
                        <p><span className="youtube-marker" data-start="542.294" data-end="543.319">(Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="543.32" data-end="548.532">If you put 20 hours of
                            focuseddeliberate practice into that thing,</span> <span className="youtube-marker"
                                data-start="548.532" data-end="550.964">you will be astounded.</span></p>
                        <p><span className="youtube-marker" data-start="550.964" data-end="554.135">Astounded at how good
                            you
                            are.</span></p>
                        <p><span className="youtube-marker" data-start="554.135" data-end="555.645">20 hours is
                            doable,</span> <span className="youtube-marker" data-start="555.645"
                                data-end="559.956">thats about 45 minutes a dayfor
                                about a month.</span></p>
                        <p><span className="youtube-marker" data-start="559.956" data-end="562.066">Even skipping a couple
                            days,here and
                            there.</span></p>
                        <p><span className="youtube-marker" data-start="562.066" data-end="565.221">20 hours isnt that hard
                            to
                            accumulate.</span></p>
                        <p><span className="youtube-marker" data-start="565.221" data-end="568.1">Now, theres a method to
                            doing
                            this.</span></p>
                        <p><span className="youtube-marker" data-start="568.1" data-end="571.097">Because its not like you
                            can just
                            startfiddling around for about 20 hours</span> <span className="youtube-marker"
                                data-start="571.097" data-end="573.044">and expect these massive
                                improvements.</span></p>
                        <p><span className="youtube-marker" data-start="573.044" data-end="575.713">Theres a way to
                            practice
                            intelligently.</span></p>
                        <p><span className="youtube-marker" data-start="575.713" data-end="577.997">Theres a way to
                            practice
                            efficiently,</span> <span className="youtube-marker" data-start="577.997"
                                data-end="581.05">that will
                                make sure that you investthose 20 hours</span> <span className="youtube-marker"
                                    data-start="581.051" data-end="583.592">in the most effective waythat you
                                possibly can.</span></p>
                        <p><span className="youtube-marker" data-start="583.592" data-end="587.518">And heres the method,it
                            applies to
                            anything:</span> <span className="youtube-marker" data-start="587.518"
                                data-end="591.363">The first is
                                to deconstruct the skill.</span></p>
                        <p><span className="youtube-marker" data-start="591.363" data-end="596.262">Decide exactly what you
                            wantto be
                            able to do when youre done,</span> <span className="youtube-marker"
                                data-start="596.262" data-end="602.071">and then look into the skilland break it
                                down into smaller pieces.</span></p>
                        <p><span className="youtube-marker" data-start="602.072" data-end="606.042">Most of the thingsthat
                            we think of
                            as skills</span> <span className="youtube-marker" data-start="606.042"
                                data-end="610.639">are actually
                                big bundles of skillsthat require all sorts of different things.</span></p>
                        <p><span className="youtube-marker" data-start="610.639" data-end="614.211">The more you can break
                            apart the
                            skill,</span> <span className="youtube-marker" data-start="614.211"
                                data-end="616.583">the more youre
                                able to decide,</span> <span className="youtube-marker" data-start="616.583"
                                    data-end="618.973">what are
                                the parts of this skillthat would actually help me</span> <span
                                    className="youtube-marker" data-start="618.974" data-end="621.365">get to what I
                                want?</span></p>
                        <p><span className="youtube-marker" data-start="621.365" data-end="623.758">And then you can
                            practice those
                            first.</span></p>
                        <p><span className="youtube-marker" data-start="623.758" data-end="625.96">And if you practicethe
                            most important
                            things first,</span> <span className="youtube-marker" data-start="625.96"
                                data-end="628.731">youll be
                                able to improveyour performance</span> <span className="youtube-marker"
                                    data-start="628.731" data-end="631.502">in the least amount of time
                                possible.</span></p>
                        <p><span className="youtube-marker" data-start="631.502" data-end="634.272">The second is, learn
                            enoughto self
                            correct.</span></p>
                        <p><span className="youtube-marker" data-start="634.273" data-end="638.467">So, get three to five
                            resourcesabout
                            what it is youre trying to learn.</span></p>
                        <p><span className="youtube-marker" data-start="638.467" data-end="643.718">Could be book, could be
                            DVDs,could
                            be courses, could be anything.</span></p>
                        <p><span className="youtube-marker" data-start="643.719" data-end="648.95">But dont use those as a
                            wayto
                            procrastinate on practice.</span></p>
                        <p><span className="youtube-marker" data-start="648.95" data-end="650.585">I know I do this,
                            right?</span></p>
                        <p><span className="youtube-marker" data-start="650.585" data-end="652.661">Get like 20 books about
                            the
                            topic,like,</span> <span className="youtube-marker" data-start="652.661"
                                data-end="655.137">Im going
                                to start learninghow to program a computer</span> <span className="youtube-marker"
                                    data-start="655.138" data-end="657.615">when I complete these 20 books.</span>
                        </p>
                        <p><span className="youtube-marker" data-start="657.615" data-end="660.094">No. Thats
                            procrastination.</span>
                        </p>
                        <p><span className="youtube-marker" data-start="660.094" data-end="664.141">What you want to dois
                            learn just
                            enough</span> <span className="youtube-marker" data-start="664.141"
                                data-end="665.849">that you can
                                actually practice</span> <span className="youtube-marker" data-start="665.85"
                                    data-end="670.914">and
                                self correct or self editas you practice.</span></p>
                        <p><span className="youtube-marker" data-start="670.914" data-end="673.819">So the learning becomesa
                            way of
                            getting better</span> <span className="youtube-marker" data-start="673.819"
                                data-end="676.723">at
                                noticingwhen youre making a mistake</span> <span className="youtube-marker"
                                    data-start="676.724" data-end="679.63">and then doing somethinga little
                                different.</span></p>
                        <p><span className="youtube-marker" data-start="679.63" data-end="684.106">The third is to remove
                            barriersto
                            practice.</span></p>
                        <p><span className="youtube-marker" data-start="684.106" data-end="686.55">Distractions, television,
                            internet.</span></p>
                        <p><span className="youtube-marker" data-start="686.55" data-end="689.929">All of these thingsthat
                            get in the
                            way</span> <span className="youtube-marker" data-start="689.929"
                                data-end="693.308">of you actually
                                sitting downand doing the work.</span></p>
                        <p><span className="youtube-marker" data-start="693.308" data-end="696.689">And the more youre able
                            to usejust
                            a little bit of willpower</span> <span className="youtube-marker"
                                data-start="696.689" data-end="699.887">to remove the distractions thatare
                                keeping you from practicing,</span> <span className="youtube-marker"
                                    data-start="699.887" data-end="706.27">the more likely you are to actuallysit
                                down and practice, right?</span></p>
                        <p><span className="youtube-marker" data-start="706.27" data-end="711.473">And the fourth is to
                            practicefor at
                            least 20 hours.</span></p>
                        <p><span className="youtube-marker" data-start="711.473" data-end="714.77">Now, most skills have
                            what I calla
                            frustration barrier.</span></p>
                        <p><span className="youtube-marker" data-start="714.77" data-end="718.078">You know, the
                            grossly-incompetent-and-knowing-it part?</span></p>
                        <p><span className="youtube-marker" data-start="718.078" data-end="722.374">Thats really, really
                            frustrating.We
                            dont like to feel stupid.</span></p>
                        <p><span className="youtube-marker" data-start="722.374" data-end="727.314">And feeling stupid is a
                            barrier to
                            usactually sitting down and doing the work.</span></p>
                        <p><span className="youtube-marker" data-start="727.314" data-end="731.762">So, by pre-committing to
                            practicingwhatever it is that you want to do</span> <span className="youtube-marker"
                                data-start="731.762" data-end="734.377">for at least 20 hours,</span> <span
                                    className="youtube-marker" data-start="734.378" data-end="738.918">you will be able
                                to overcomethat initial frustration
                                barrier</span> <span className="youtube-marker" data-start="738.918"
                                    data-end="743.029">and stick with
                                the practice long enoughto actually reap the rewards.</span></p>
                        <p><span className="youtube-marker" data-start="743.029" data-end="745.368">Thats it! Its not
                            rocket
                            science.</span></p>
                        <p><span className="youtube-marker" data-start="745.368" data-end="750.479">Four very simple steps
                            thatyou can
                            use to learn anything.</span></p>
                        <p><span className="youtube-marker" data-start="751.466" data-end="755.302">Now, this is easy to
                            talkabout in
                            theory,</span> <span className="youtube-marker" data-start="755.302"
                                data-end="757.703">but its more
                                fun to talk aboutin practice.</span></p>
                        <p><span className="youtube-marker" data-start="757.703" data-end="761.964">So one of the things
                            that Ive
                            wantedto learn how to do for a long time</span> <span className="youtube-marker"
                                data-start="761.964" data-end="764.163">is play the ukulele.</span></p>
                        <p><span className="youtube-marker" data-start="764.163" data-end="767.787">Has anybody seenJake
                            Shimabukuros
                            TEDTalk</span> <span className="youtube-marker" data-start="767.787"
                                data-end="770.901">where he plays
                                the ukuleleand makes it sound like --</span> <span className="youtube-marker"
                                    data-start="770.901" data-end="772.26">hes like a ukulele god.</span></p>
                        <p><span className="youtube-marker" data-start="772.26" data-end="774.026">Its amazing.</span></p>
                        <p><span className="youtube-marker" data-start="774.026" data-end="777.205">I saw it, I was
                            like,That is so
                            cool!</span></p>
                        <p><span className="youtube-marker" data-start="777.206" data-end="781.373">Its such a neat
                            instrument.I would
                            really like to learn how to play.</span></p>
                        <p><span className="youtube-marker" data-start="781.373" data-end="783.96">And so I decidedthat to
                            test this
                            theory</span> <span className="youtube-marker" data-start="783.96"
                                data-end="787.636">I wanted to put 20
                                hoursinto practicing ukulele</span> <span className="youtube-marker"
                                    data-start="787.636" data-end="789.819">and see where it got.</span></p>
                        <p><span className="youtube-marker" data-start="789.819" data-end="793.635">And so the first
                            thingabout playing
                            the ukulele is,</span> <span className="youtube-marker" data-start="793.635"
                                data-end="797.701">in order
                                to practice,you have to have one, right?</span></p>
                        <p><span className="youtube-marker" data-start="797.701" data-end="801.791">So, I got an ukulele
                            and-- My lovely
                            assistant?</span></p>
                        <p><span className="youtube-marker" data-start="801.791" data-end="804.526">(Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="804.526" data-end="809.973">Thank you sir.I think I
                            need the
                            chord here.</span></p>
                        <p><span className="youtube-marker" data-start="811.58" data-end="815.569">Its not just an
                            ukulele,its an
                            electric ukulele. (Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="815.569" data-end="817.204">Yeah.</span></p>
                        <p><span className="youtube-marker" data-start="820.635" data-end="825.194">So, the first couple
                            hours are
                            justlike the first couple hours of anything.</span></p>
                        <p><span className="youtube-marker" data-start="825.195" data-end="828.554">You have to get the
                            toolsthat you
                            are using to practice.</span></p>
                        <p><span className="youtube-marker" data-start="828.554" data-end="830.616">You have to make
                            suretheyre
                            available.</span></p>
                        <p><span className="youtube-marker" data-start="830.616" data-end="832.582">My ukulele didnt
                            comewith strings
                            attached.</span></p>
                        <p><span className="youtube-marker" data-start="832.582" data-end="834.548">I had to figure outhow
                            to put those
                            on.</span></p>
                        <p><span className="youtube-marker" data-start="834.548" data-end="836.515">Like, thats kind of
                            important,
                            right?</span></p>
                        <p><span className="youtube-marker" data-start="836.515" data-end="838.468">And learning how to
                            tune,learning
                            how to make sure</span> <span className="youtube-marker" data-start="838.468"
                                data-end="840.32">that all
                                of the thingsthat need to be done</span> <span className="youtube-marker"
                                    data-start="840.321" data-end="844.515">in order to start practicingget done,
                                right?</span></p>
                        <p><span className="youtube-marker" data-start="844.515" data-end="851.187">Now, one of the things
                            when I
                            wasready to actually start practicing</span> <span className="youtube-marker"
                                data-start="851.187" data-end="855.996">was I looked in online databasesand
                                songbooks for how to play songs.</span></p>
                        <p><span className="youtube-marker" data-start="855.996" data-end="859.088">And they say, okay,
                            ukuleles, you
                            canplay more than one string at a time,</span> <span className="youtube-marker"
                                data-start="859.088" data-end="860.968">so you can play chords, thats
                                cool,</span> <span className="youtube-marker" data-start="860.969"
                                    data-end="864.242">you are accompanying yourself,yay you. (Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="864.242" data-end="868.356">And when I started
                            looking at
                            songs,</span> <span className="youtube-marker" data-start="868.356"
                                data-end="872.471">I had an ukulele
                                chord bookthat had like hundreds of chords.</span></p>
                        <p><span className="youtube-marker" data-start="872.471" data-end="875.534">Looking at this and Wow,
                            thats
                            intimidating.</span></p>
                        <p><span className="youtube-marker" data-start="875.534" data-end="877.859">But when you look at the
                            actual
                            songs,</span> <span className="youtube-marker" data-start="877.859"
                                data-end="882.71">you see the same
                                chordsover and over, right?</span></p>
                        <p><span className="youtube-marker" data-start="882.71" data-end="886.299">As it turns out, playing
                            the
                            ukuleleis kind of like doing anything,</span> <span className="youtube-marker"
                                data-start="886.299" data-end="889.552">Theres a very small set of thingsthat
                                are really important</span> <span className="youtube-marker" data-start="889.552"
                                    data-end="892.422">and techniques that youll useall the
                                time.</span></p>
                        <p><span className="youtube-marker" data-start="892.422" data-end="898.42">And in most songsyoull
                            use four,
                            maybe five chords,</span> <span className="youtube-marker" data-start="898.42"
                                data-end="900.228">and
                                thats it, thats the song.</span></p>
                        <p><span className="youtube-marker" data-start="900.229" data-end="904.993">You dont have to know
                            hundreds,as
                            long as you know the four or the five.</span></p>
                        <p><span className="youtube-marker" data-start="904.993" data-end="906.813">So, while I was doing my
                            research,</span> <span className="youtube-marker" data-start="906.813"
                                data-end="911.264">I found a
                                wonderful little medleyof pop songs</span> <span className="youtube-marker"
                                    data-start="911.264" data-end="916.178">by a band called Axis of
                                Awesome.(Whistles)</span></p>
                        <p><span className="youtube-marker" data-start="916.178" data-end="919.199">-- Somebody knows it.
                            --</span>
                            <span className="youtube-marker" data-start="919.199" data-end="923.418">And what Axis of
                                Awesome saysis
                                that you can learn,</span> <span className="youtube-marker" data-start="923.418"
                                    data-end="927.017">or
                                you can play pretty muchany pop song of the past five decades,</span> <span
                                    className="youtube-marker" data-start="927.017" data-end="928.685">if you know four
                                chords,</span> <span className="youtube-marker" data-start="928.685"
                                    data-end="933.061">and those chords are G, D, Em and C.</span>
                        </p>
                        <p><span className="youtube-marker" data-start="933.062" data-end="937.931">Four chords pump
                            outevery pop song
                            ever, right?</span></p>
                        <p><span className="youtube-marker" data-start="937.931" data-end="939.401">So I thought, this is
                            cool!</span>
                        </p>
                        <p><span className="youtube-marker" data-start="939.401" data-end="942.584">I would like to
                            playevery pop song
                            ever. (Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="942.584" data-end="945.627">So, that was the first
                            songI decided
                            to learn,</span> <span className="youtube-marker" data-start="945.627"
                                data-end="949.444">and I would
                                like to actuallyshare it with you. Ready?</span></p>
                        <p><span className="youtube-marker" data-start="949.445"
                            data-end="951.423">(Applause)Alright.</span></p>
                        <p><span className="youtube-marker" data-start="951.423" data-end="954.733">(Music)</span></p>
                        <p><span className="youtube-marker" data-start="963.6" data-end="966.104">(Singing)Just a small town
                            girl,</span> <span className="youtube-marker" data-start="966.104"
                                data-end="968.878">living in a lonely
                                world,</span> <span className="youtube-marker" data-start="968.878"
                                    data-end="974.652">she took the
                                midnight traingoing anywhere.</span></p>
                        <p><span className="youtube-marker" data-start="974.652" data-end="978.209">I heard that you settled
                            down,(Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="978.209" data-end="981.671">that you found a
                            girl,</span> <span className="youtube-marker" data-start="981.672"
                                data-end="985.013">that youre married now.</span></p>
                        <p><span className="youtube-marker" data-start="985.013" data-end="987.323">Every night in my
                            dreams(Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="987.323" data-end="990.496">I see you, I feel
                            you,</span> <span className="youtube-marker" data-start="990.496"
                                data-end="996.252">that is how I know you go
                                on.(Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="996.253" data-end="1002.227">I wont hesitate no
                            more, no
                            more.It cannot wait, Im yours.</span></p>
                        <p><span className="youtube-marker" data-start="1002.227" data-end="1007.6">Cause you were
                            amazing,we did
                            amazing things.</span></p>
                        <p><span className="youtube-marker" data-start="1007.6" data-end="1012.682">If I could, then I
                            would,Id go
                            wherever you will --</span> <span className="youtube-marker" data-start="1012.682"
                                data-end="1018.244">Can you feel the love tonight.(Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="1018.244" data-end="1023.4">I cant live with or
                            without
                            you.</span></p>
                        <p><span className="youtube-marker" data-start="1023.4" data-end="1025.19">When I find myself
                            --</span> <span className="youtube-marker" data-start="1025.19"
                                data-end="1027.489">When I find myself in times of
                                trouble,mother Mary comes to me,</span> <span className="youtube-marker"
                                    data-start="1027.489" data-end="1031.865">Sometimes I feel like I dont have
                                partner.No woman, no cry.</span></p>
                        <p><span className="youtube-marker" data-start="1031.865" data-end="1033.503">Yeah mama, this surely
                            is a
                            dream.</span></p>
                        <p><span className="youtube-marker" data-start="1033.503" data-end="1035.836">I come from a land
                            down
                            under.(Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="1035.836" data-end="1038.863">Once a jolly
                            swagmancamped by a
                            billabong.</span></p>
                        <p><span className="youtube-marker" data-start="1038.863" data-end="1042.253">Hey, I just met you,
                            and this is
                            crazy,(Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="1042.252" data-end="1046.413">but heres my number,
                            so call
                            me</span> <span className="youtube-marker" data-start="1046.413"
                                data-end="1050.19">Hey sexy lady, op,
                                op, op, op,oppan gangnam style. (Laughter)</span></p>
                        <p><span className="youtube-marker" data-start="1050.19" data-end="1055.932">Its time to say
                            goodbye.</span>
                        </p>
                        <p><span className="youtube-marker" data-start="1055.932" data-end="1065.79">Closing time, every new
                            beginningcomes from some other beginnings end.</span></p>
                        <p><span className="youtube-marker" data-start="1065.79" data-end="1069.86">(Singing and music
                            ends)(Applause)</span></p>
                        <p><span className="youtube-marker" data-start="1076.911" data-end="1081.199">Thank you, thank
                            you.</span></p>
                        <p><span className="youtube-marker" data-start="1083.013" data-end="1086.856">I love that
                            song.(Laughter)</span>
                        </p>
                        <p><span className="youtube-marker" data-start="1087.395" data-end="1090.499">And I have a secret to
                            share with
                            you.</span></p>
                        <p><span className="youtube-marker" data-start="1090.499" data-end="1094.471">So, by playing that
                            song for
                            you,</span> <span className="youtube-marker" data-start="1094.471"
                                data-end="1099.221">I just hit my
                                twentieth hourof practicing the ukulele.</span></p>
                        <p><span className="youtube-marker" data-start="1099.221" data-end="1103.209">(Applause)Thank
                            you.</span></p>
                        <p><span className="youtube-marker" data-start="1104.933" data-end="1108.974">And so its amazing,
                            pretty
                            muchanything that you can think of,</span> <span className="youtube-marker"
                                data-start="1108.974" data-end="1110.752">what do you want to do.</span></p>
                        <p><span className="youtube-marker" data-start="1110.752" data-end="1115.317">The major barrier to
                            learnsomething new is not intellectual,</span> <span className="youtube-marker"
                                data-start="1115.317" data-end="1120.998">its not the process of you learninga
                                bunch of little tips or tricks or
                                things.</span></p>
                        <p><span className="youtube-marker" data-start="1120.998" data-end="1124.753">The major barriers
                            emotional.Were scared.</span></p>
                        <p><span className="youtube-marker" data-start="1124.753" data-end="1127.139">Feeling stupid doesnt
                            feel
                            good,</span> <span className="youtube-marker" data-start="1127.014"
                                data-end="1129.274">in the beginning
                                of learninganything new</span> <span className="youtube-marker"
                                    data-start="1129.275" data-end="1131.537">you feel really stupid.</span></p>
                        <p><span className="youtube-marker" data-start="1131.537" data-end="1135.633">So the major barriers
                            not
                            intellectual,its emotional.</span></p>
                        <p><span className="youtube-marker" data-start="1135.633" data-end="1138.971">But put 20 hours into
                            anything.</span></p>
                        <p><span className="youtube-marker" data-start="1138.971" data-end="1141.377">It doesnt matter.What
                            do you want
                            to learn?</span></p>
                        <p><span className="youtube-marker" data-start="1141.377" data-end="1144.848">Do you want to learn a
                            language?Want to learn how to cook?</span></p>
                        <p><span className="youtube-marker" data-start="1144.848" data-end="1147.114">Want to learn how to
                            draw?</span>
                        </p>
                        <p><span className="youtube-marker" data-start="1147.114" data-end="1150.86">What turns you on?What
                            lights you
                            up?</span></p>
                        <p><span className="youtube-marker" data-start="1150.86" data-end="1154.746">Go out and do that
                            thing.It only
                            takes 20 hours.</span></p>
                        <p><span className="youtube-marker" data-start="1154.747" data-end="1156.093">Have fun.</span></p>
                        <p><span className="youtube-marker" data-start="1156.093" data-end="1159.06">(Applause)</span></p>
                    </>}

                </div>
            </div>
        </div >
    )
}

export default CaptionListting