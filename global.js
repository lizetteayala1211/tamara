

/*** Document Load Test ***/
$(document).ready(function() {
  console.log("document loaded");
  window.n = 0
});

/***  Nav Bar Desktop to Mobile view Responsiveness ***/
function MobiileNavOpen() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

/*** Audio Files Dynamic Switch ***/

var playing = false;

function action() {
  var audio = document.getElementById(`audio-0${n}`);
  if (playing === false) {
    audio.play();
    playing = true;
  } else {
    audio.pause();
    playing = false;
  }
}

// var playing = true;

// function pause() {
//   var audio = document.getElementById(`audio-0${n}`);
//   if (playing === true) {
//     audio.pause();
//     playing = false;
//   // } else {
//   //   audio.pause();
//   //   playing = false;
//   }
// }

/*** UX Functions separated by viewport sizes ***/
const isDesktop = window.matchMedia("only screen and (min-width:641px)").matches;
const isMobile = window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 480px)").matches;

$(window).on("load", function() {
  console.log("window loaded");

  // var opening_animation = false
  // if (
  //   isDesktop
  //   && opening_animation
  // )


  {

    $( "#all-content" ).delay( 6000 ).animate({ "marginTop":"-35px" }, 2000 );
    $( "#top-part" ).delay( 6000 ).animate({ height: "15%" }, 2000 );
    $( "#first-opening-p" ).delay( 7000 ).animate({ height: "100%" }, 3000 );
    $( "#opening-title" ).delay( 7500 ).animate({ "marginTop":"100px" }, 3000 );
    $( "#opening-title" ).delay( 8000 ).fadeOut( 3000 );
    $( "#bottom-part" ).delay( 0 ).animate({ height: "25%" }, 3000 );
    $( "#opening-poem" ).delay( 2000 ).animate({ "opacity":"1" }, 3000 );
    $( "#opening-poem" ).delay( 8500 ).fadeIn( 2000 );
    $( "#first-opening-p" ).delay( 9000 ).toggleClass('scroll', 3000 );

  }

  if (isMobile) {}

});

/*** All Brick Link Trigger Actions (Reveal Content) ***/

// Wait for the page to load first
$(window).on("load", function() {

  //Get a reference to the link on the page

  $('[id^="brick"]').on('click', function() {

    $('.transcript-container').text('')

    if (isDesktop) {

      var target = parseInt(this.id.slice(-1))
      if (target == n + 1 || n == 5 && target == 1) {
        if (n == '0') {
          window.n = target
          $("#first-opening-p").delay(2000).animate({height: "1.5vh"}, 3000);
          $("#all-content").delay(2500).animate({"marginTop": "10px"}, 3000);
          $("#all-content").delay(2500).animate({height: "93%"}, 3000);
          $("#title-top-01").delay(2500).addClass("remove", 3000);
          $("#top-part").delay(2500).animate({height: "78%"}, 3000);
          $("#bottom-part").delay(2500).animate({height: "10%"}, 3000);
          $("#main-opacity").delay(1000).addClass("full-opacity", 3000);
          $("#main-opacity").delay(1000).animate({height: "8%"}, 3000);
          $("#first-opening-p").delay(6000).toggleClass('scroll', 3000);
          $("#experience").delay(3000).animate({height: "88%"}, 3000);
          $("#all-isolated-title").delay(3000).animate({height: "10%"}, 3000);
          $("#second-brick").delay(3000).animate({width: "0vw"}, 3000);
          $("#second-brick").delay(0).fadeOut(3000);
          $("#first-brick").delay(3000).animate({width: "101vw"}, 3000);
          $("#fourth-brick").delay(1000).addClass("bg-change", 3000);
          $("#first-brick").delay(3000).addClass("experience-bg", 3000);
        }

        else {
          window.n = target
          $('[id^="isolated"]').fadeOut(2000);
          $(`[id^="isolated"][n=${n}]`).delay(1000).fadeIn(2000);
          $(`[id^="isolated"]:not([n=${n}])`).delay(1000).animate({height: "0%"}, 2000);
          $('.experience-poem').fadeOut(2000);
          $(`#ex-0${n}`).delay(1500).fadeIn(2000);
        }
      }

    }
    else if (isMobile) {}
    return false

  })

  //////////////////
  console.clear()

  /// Scrolling text ///

  var messages = {
    1: {
      0: 'Narrator: Carlos Truan Test',
      25: 'I could go straight to work. And I was in a, it was called a—a re-entry program. That was in Dallas and it was geared towards repeat drug offenders. Felon, you know, felony, drug offenders. And so I was there with a bunch of other people in that group, and I was the only one that tattooed and it wasnt-I was the only person that tattooed there.',
      100: 'What did that—what did that feel like for you as a young person? To do what? To do dope, to get involved like that? [pause] I dont know that—there, there was just something that drew me to it. I wasnt like—and my friends that I hung out with, they didnt—it, it was a secret, you know, I didnt tell anybody. It was kind of my own little thing and these guys...I mean, I dont wanna say that I felt safe with them. I wasnt like, oh, these guys are gonna take care of me. I mean they did—you know, actually kind of a weird thing. I, the very first time I did it, I ODed. I went out and they were freaked out and they were so pissed at me. They were like your dads gonna kill us if he finds out. I came to. And they had me in the backyard of this other dudes house. And he was spraying me with a water hose. I was completely out of it. They brought me back, I guess, I mean, I didnt die, but you know—I went out, y—and they had to revive me or whatever. And they said they would never give it to me ever again and I was like, what, why?',
      170: 'They had already given me chances, you know? I had already been to rehab once, i had already gone to jail like two times for coming up dirty. And I knew this time, there was no more chances. So I dipped out the back and hauled ass, got in my truck and took off. And then they started coming, looking for me at my house. My buddy came to town from Los Angeles...And I told him everything, you know, I was like, look, Im strung out. Im on the run. I just gotta kind of get my shit together, you know? And he was like, what do you need? Hes like my wifes a doctor. Tell me what meds you need or whatever. And well put you up. Ill buy you a plane ticket here. It was crazy. Ill buy you a plane ticket. You can stay at my house. Dude had kids and stuff. You know, he was a gangster, you know, but he was still like, i mean, he was good. He was good to me. And he brought me out there and let me kick at his house. His wife got me some meds or whatever, some detox meds and uh...yeah. And I tattooed out there. But I couldnt stay sober.',
      305: 'I got really involved in the program in [prison], you know what I mean? I started going to meetings in there and, I think I decided at one point, you know—I was in the county jail in Dallas, which is a really crazy jail. But <unintelligible 01:19:39> I think its like 10 stories high our something...And those guards did not care. And I was kicking dope in there and, you know, like I literally had vomit on the front of my jumper and i had shit on the back of my jumper cuz it was coming out both ends, you know? I was that guy with the shitty pants in jail. And Im going to prison, and I dont know whats gonna happen at that point. I hadnt been sentenced yet. I had like 13 felonies, you know? And I think at some point I had decided, and I was like man, Im over this, this isnt working. Im gonna try something else.',
      570: 'A Greek letter adopted as a symbol for gay liberation in 1970 by the New York Activists Alliance.',
      800: 'So my PO said, well, what are you gonna do? You know, when I got out and I went to go meet her or whatever. And she was like, what are you gonna do? And I said, well Im a tattoo artist. I got a job at my buddys shop, you know? And she was like, yeah, right. Youre not gonna do that. And I was like, oh, well, why not? I was like, what do you mean? Its like a regular—to me, it was a regualr job. She goes, Im not dumb. Shes like, i know that tattoo shops are nothing but gangsters and prostitutes. I was like, what? Or bikers, bikers and prostitutes. I was kind of like—floored, you know. And I was like shit, Im gonna have to get like a regular job. And I mean, I did. I went and got a baking job. And I had done baking while I was incarcerated. Briefly, you know what I mean? I was like, yeah, made one piece of bread. It was probably $7 an hour or something like that. So when I would go to work [tattooing] on Tuesday and Wednesday, I would make the same amount of money or more than my paycheck in those days, you know? It was wild. But...I mean, I did good at it. I did good at the baking. I took to it, and I dealt with it and I made the best of it. But yeah, it was weird. All my friends that were tattooing, they knew I was—you know, they knew me as a tattooer. They were like, why are you baking? They just didnt get it. Theyre like doing all cool tattoo guy stuff. And I was like, oh man, I gotta be up early. Cuz I gotta be at the bakery at four in the morning.',
      900: 'Like, who is this joker with all these colorful tattoos and everything, you know, friendly tattoos. They used to say hes got friendly. <laughs>',
      970: 'I mean, it did suck because Austin, its—the shop that I was at, wasnt like Dallas, where you just showed up and tattooed, you had to have a clientele, and all my clientele was gone. Cause I had been gone—probably a year and a hald before I got locked up, I was on the streets, you know? Just going, loving from place to place or motels or whatever. And then finally getting sent back and then I was gone for a year and then in Dallas for a year. So its like three and a hald years that my customers were getting tattooed by everybody else, you know? And I wasnt relevant anymore.',
      1410: 'It was tough in Austin. It was really, really hard. It wasnt a bounce back. I mean, other than having to work in the bakery. But as far as tattooing goes, I didnt make any money, you know? i wasnt making any money. It was a different, it was a different thing. You know, tattooings a little bit different, I think because of the whole social media and how it kind of changed things. I think by the time I made it back to Austin, it was 2014. It was very discouraging. Theres so many—everyone was so good and they were tattooing so different and what I was doing wasnt happening anymore, you know?',
      1460: 'No, but I, I love it. I love what happened, you know what I mean? I love that Im here and that I, you know, and I get to do this thing and, that everything happened when it happened, everything happened how it happened and when it happened, because if it had happened any other way, I dont know what it would be like, you know?',
      1480: 'And its like <pause> so sometimes its hard to believe, right. That its like, when I talk about how it was, and where I came from, sometimes I cant believe it, that Im sitting here in my house with my family, with a car that has insurance, the bills are paid, have a beautiful shop, amazing friends. Im able to set boundaries, like I know how to do those things. I know what a relationship is, what I want my relationship to look like. You know what I mean? With all the people around me, you know? And whereas, before I had to learn all that stuff. And I think that its helped all of our experiences,right? Our life experiences play a part as to whats happening today. Theres something that I always say to people <clears throat> not to get too programmy or anything, but its a real life thing, you know? And it can be applied to anybody, whetther you are a alcoholiv or a junkie or a regular person or a normal person. Its like every experience that we have in life <pause> is an opportunity for growth, whether its god or bad, right. If I had a bad relationship, then you take the good out of that. You take the good out of that. And I think that thats one of the most valuable things that Ive learned. To move forward from any situation, whether its good or bad, you know? So. '
    },

    2: {
      25: 'I had written a letter. I still have that letter. You know, I had written another letter to Ms. Major and she sent me a response and ti was a pink envelope on pink stationery. That was like, I got, we, got your letter. We will be there on this date. And they basically came down there and kicked the fuckin door in and were like, We wanna see her and we wanna see everybody thats involved and you need to present them. FP (01:12:47): They brought an attorney and they were like, were doing a, were doing a wellness check for our client. And thats what really started the relationship with - with me and Mayor.',
      65: 'So. I... was in the closet when I was at Folsom, but I had— I would get, um, there were like these queer newsletters and um, that when I first—first connected with Miss Major. And um, at the time the attorney that was running TGI Justice project was— I think his name was Alexander Lee. And they were like in a garage in Oakland, you know, it was like real, real small. And they just had these little trifold pamphlets or whatever and I would get em and wait until everybody went to sleep. And Id be like looking at it uner the light of the TV. And I told myself, you know, once I get to a place where its safer to do so Im gonna come out. Like I had already— I had already planned that, you know, and my, my friend that passed away this year, I had come out to him, you know, and told him like, Hey, you know, this is — this is who I am or whatever.',
      130: 'FP (01:11:15): Im like, oh, you know, this what happened. Im going to the hole with Shy Boy. Well bitch, hold on, let me pack my shit. Ima go too. And so there was this little chain of things and I just like, I had this spark of an idea and I was like, matter of facts, lets just refuse to lock up. Lets all go sit on the bleachers. And when they, when they re-call the yard, nobody say nothing, just put your ID in front of you and tell, tell them were refusing to lock up. Were all going to the hole with Shy Boy, you know, and we did that and we shut the prison down for free days, had multiple standoffs with the police. Like it was a, it was a, it was a whole-ass odreal. Um, they tried to kill me after that. FP (01:18:23): I mean its, uh, its beautiful in a way that I- I have not experience in th air quotes free world. Yeah. Just the- the level of interdependence and mutual aid it amongst peoplein prison, it, it looks, it looks way different. Yeha. It looks way different. And like even- even things like um, like um, like transformative justice, like I didnt even know the fuck that word was until like a year ago, you know? But thats literally what happens. And its like, you— you cant get away. We wake up and I have to look at, at, at your musty ass every day. So I may be upset by something you did. And maybe we dont talk for a while, but, but nobody better try no stupid with you either because youre mine and Im yours. And I, I will, its just— theres a kind of radical unity that happens and people figure it out. FP (01:19:29): They figure out how to work through really tough, you know, cause its not always perfect. People are messy, you know, but you, you cant fuck with none of them girls in there and not get your whole fuckin ass handed to you. Even if they—theyre—they could be mortal fuckin enemies and the kind of radical unity that will show up if some random dude fucks with one of them, girls is just—its, its unparalled. And I—dont, I just not saying it dont exist. I just, I have not seen it at the level that i experienced when i was in prison.  ',
      140: 'FP (01:10:21): And you know, we, uh, we all had a reputation for like, I guess keeping the peace in that way. Cause we would sock you the fuck out if you fucked with anybody that was queer. You know, um, up to and including like— like really life threatening, physical violence, if we needed to, you know?',
      295: 'FP (00:46:05): And I was like, fuck you talking about? Hes like, no like to lower, lower security. And hes like, I put you up for these two places. And a week and a half later I was at a medium security place. So. And thats the place that I came out. And thats where, thats where all of my- I dont know, I felt like Folsom was like, where was the breeding ground for, you know, militancy and social activism and like me being radicalized. It like— all of that information, all of those conversations were there. That community was there. It just looked very different, cause it was very hyper masculine in lots of ways. And then yeah, I got to the next place, which was dormitories and it was like fuckin Camp Snoopy. You know, people still got touched up, but it was just not— nobody was getting stabbed at this place. FP (00:47:01): Ill put it that way. Like if you saw a ight at Folsom, it was because those two people lpoved each other. Like they were friends. Or it was a diversion cuz somebody was getting killed around the corner. So this other place that I went to was not that. It was like all, it was a heads up fade. It was just, it was super like going from that to like just fist fights. I was like, man, this place is super chill. This is great. I can go home from here, you know? And thats the place that I came out at. Mm-hmm <affirmative>',
      430: 'I dont even even know if the Abolitionist is still around, but like I had an article in there... and in the magazine in These Times and yeah, we were— I spent a lot of time in the hole, Tamara. <laughs> Uh, for like direct action shit, cause it was, I wont say that I was necessaryily asked to do it. I was just always willing. I was always willing to give the information to, to Mayors organization, but I was always willing to go to hell too.',
      580: 'FP (00:15:15): Yeah. Um, really the first time i went out on the— on the blade, you know, like if yall dont know what the blade is, its, uh, its the hoe stroll, you know? Um, and I was like, I got directed there by this crust punk in Hollyowood, I was on Hollywood Boulevard and I was like, Im trying to find, you know, other people or whatever. And so she was like, the only place, I know they hang out is like over there, you know, but I dont know if you want to go over there. FP (00:15:43): You know? And Hollywood at that time was a-LA in general was just different—LA in the nineties was...it was wold as fuck. So, um, yeah, it was people, you know, it was like cars turning in and out of this lot and people fuckin in the street and just, you know, it was a, it was a fuckin zoo out there and it was really fucking dangerous too, you know. But yeah, I, I basically,—her name was Antoinette. Um, it was like so i was right on like Hollywood and— Hollywood, um, which at the time was like, that was the spot. Theres a 24 hour donut spot there. And so, you know, youre not technically loitering, you know what I mean? You an suck a dick and then buy a donut and the cops will leave you alone. But, um, yeah, like she basically in a nutshell was just like, you know, the fuck are you doing out here? FP (00:16:38): Like, youre gonna get yourself fucking killed. And she was really irritated with me. Um, cause she had to stop working. And— told me to get on the bus with her. She was gonna take me to the shelter, which doesnt exist any more. But um, shes looking at me, were on the bus cause she had asked me what my name was and I told her my dead name and shes like no, bitch, that dont work. Like <laugh> and uh, she looked—she kept looking at me and she said that— she said Faith. And I was like, what is, what is that? You know? And shes like, thats your name. Thats what we gon call you. Which I dont I dont know if people really talk about that, that like all the— all the girls, I know... somwbody like gave them their name. Like it just got picked up and usually it got picked up in the streets, you know, even in prison its that way. FP (00:17:30): Um, or if you didnt have one and then you like, come out in prison, like somebody comes up with a name for you that ends up sticking, you know? Um but her whole thing was just that she— she really wanted me to be something that wasnt what was going on out there. So thats— thats where that name comes from. Um, she took me to this homeless shelter that was like all people, like elderly queer people with just a sea of fucking green cots you know? Um, in a warehouse, some—somewhere in West Hollywood. And uh, yeah, she stayed awake all night while I had slept and watched— watched me so that nothing would happen to me. But yeah, thats how I got my name. <laugh>',
      660: 'FP (01:08:18): ...I got kicked out of that prison cause I started a riot.',
      681: 'FP (01:14:22): Other things got started there too, where it was, um, the start of the class action suit that was suing the department of corrections and rehabilition for the demand that they pay for trans affirming care. You know, all of it, not just hormones, not six month wait to see Dr. Lori Kohler, one doctor that served the entire trans population in all of the department of corrections. You know, it could be months before you see her. TS (01:15:42): One person in all of the state? FP (01:15:43): You should look her up. Dr. Laurie Kohler. Shes a real one. You know, shes not a part of the, the department of corrections. This is something that she does. She works at UC San Francisco taht started the entire trans healthcare program in California prisons. And yeah, it was all through telehealth through U C SF and she was the only one. You know, so youd put in that thing and like, even, even though their doctors technically should have been able to do it, they— they wouldnt, you know, so, so yeah, but now like, that— that lawsuit won. And so now, like thats a—thats a whole thing. Like they dont have to pay for everything now.'
    },

    3: {
      0: 'Bernie Lieving <Laughs> So there was a— ther was an old school bus on site doing tattoos. So I went and I had— before, I had done some community college. And had ome exhcnage students in a couple of my classes in community college and one of whom was Japaense and I ask her, I remember one time, can you write the characters of "no government" for me? And tell me how to say it. Just, you know, I mean, I had no tie to Asian culuture or Japan or it was just— it was in a political science class. So she wrote the characters out for me and it comes out to, I think its pronounced museji which means no government. So I had soemwhere, in a notebook or in, I dont know how I had those characters with me stuck in a book or something. But so anyway I did, and I got the musehi character tattooed on my forearm. Going down my forearm. In this school bus. Black outline with red coloring inside. Yeah, I dont know how I took care of that tattoo, <laughs> I mean we I dont think we had an opportunity to wash anything for days. So I got this no government in Japanese characters tattooed on my forearm at Stonehenge and again, managed to not have any, you know, infectious, bloodborne issues associated with getting tattooed in back of a bus where, I had no awareness of universal precautions or anything. (25:18:84) Bernie Lieving Oh no, I— and I guess the, then in 981 was the first time that a few of us punks went to Salinas, California and got tattoed. For the first time. (25:37:28): Tamara Santibanez Wow. What was in Salinas? (25:40:87): Bernie Lieving The tattoo shop. So we, you know, probably drove drunk over to Salinas from the Monterey area. And I went to a tattoo shop and I— my first tattoo was a skull and crossbones. With a banner underneath it that said rebel. 35:02.35 Bernie Lieving ...I also, that summer solstice of of 84 Nancy and I camped at Stonehenge. And that was the last time that the English government allowed Stonehenge to be open to the Summer Solstice festival.',
      185: '(34:24:78): Bernie Lieving So Nancy, Nancy, and I went to the England in 84. She ledt, I hung out for six months or so and I got to hang out with Dirt, the band Dirt. I got to hang out with Flux of Pink Indians. I went to Dial House and stayed with Crass for a couple days, and hung out with Steve Ignorant and Gee and um, actually- (34:53:96): Tamara Santibanez Cool. (35:02:35): Bernie Lieving -I joke about this now. But you know I think I fell in love momentarily with Gee becuase I was hanging out with her in her studio and all her collage art and everything and- you know shes probably...Im almost sixty, she must be, Im just guessing, in her- Penny Rimbaud is like close to 80 so I dont know but there was this, like, they were so generous and open and kind and made me food and I got to stay there and listened to the early recordings of the early manifestations of Acts of Love, which was that record that- that sort of got orchestral and very, a little bit different than the old Crass stuff, and Steve Ignorant was so kind.  ',
      240: '(36:14:61): Bernie Lieving And on the way to Salisbury on the train from Lodon we emt the bass player at the time, Bryn from the Damned and he invited us to camp with him and so, I camped with him and Rat Scabies and, here I was, this like 22-year-old punk from the United States and all these English people were so fucking cool to me. (36:43:45): Tamara Santibanez What was it like- I mean it sounds like you had an awareness of who they were and you knew their bands. So what was it like to meet these people that youd been listening to, and hearing their music from across an ocean? (36:57:86): Bernie Lieving It was pretty amazing. And I could not believe the graciousness and generosity with which I was welcomed. People- I mean, we left Stonehenge, i guess we were there for, I dont know. Maybe then days? And by the way I got tattooed in a school bus at Stonehenge.',
      605: '(28:57:83): So I, in 82 started playing in a band with Nancy and a couple other friends. One friend Kevin Cher who shot himself in the head about twelve years ago. And couple other, couple other folks and so we played in bands. We played in one band in particular, End of the World where we had an opportunity to open for D.O.A and for GBG and D.R.R and, we actually opened for a band called Hose one time, from New York City and the bass player for hose was Rick Rubin from Def Jam back before Def Jam. And so I think as, once I started listening to all the anarcho punk stuff which was you know, obviously more political and more- I started developing sort of a conscientiousness around animal rights. And being opposed to vivisection. And not wanting to eat animal products anymore and that sort of flowed with the human, I think one of the sayings back then was "animal rights and human liberation are tied to one another.',
      730: '(40:22:78): Bernie Lieving ...But that was a pretty transformative time being in England then and hacing eventually experienced seeing Nancy leaving and going off to Greenham Common. She changed her name to Spider. And so that was a transforamtive experience for her. I also remember panhandling in England and how uncomfortable that me feel to be broke in England. But I was well taken- the British punks just, I mean, I think we have what I was going to say was we we we were invited to a house in Pharom. So I dont know if youve ever heard of the band Polemic. Theyre kind of an obscure anarcho band. Well a couple of members of Polemic lived in Pharom and they invited us to come and they still lived at home with their parents and we got to, we crashed on their floor or couch for a few days. And I guess that was a part of the American punk scene, but mostly if you were like a traveling band. And of course I would say hey, Black Flag, you can crash at my house or whatever. but there was this openness to us and this very generous way of being with us and feeding us and giving us a place to sleep that I had not experienced before in terms of that kind of openess to other peple that was so authentic and kind.',
      805: '(45:02:26): Bernie Lieving ...I was a vegan but I had become increasingly interested in some activism around my politics. And while I was over there that first time there were- I went to a Stop the City March, which is a big thing in Lodon. I went to a number of protests, one, at Porton Down which is a military testing site where they experimented on animals with weapons. And got into like a rock throwing thing with the cops. Can you imagine throwing cops at rocks? I mean throwing rocks at cops? And then throwing them back and not getting shot? I mean that- it was like, this is nuts. Were throwing rocks at each other! We dont live in that world anymore, even in England. But you know, so, went to a bunch of protests and marches. Saw Billy Bragg at Hyde Park for a campaign- at a campaign for a nuclear disarmament rally, went to a anarchist book festival, London and saw Flux of Pink Indians and Chumbawamba and a band called KuKL which was Bjorks band before she was in the Sugar Cubes and before she was Bjork. Well, that was pretty rad and Chumbawamba before they had their hit. (48:25:49): Bernie Lieving So the last few days in London i spent at Fluxs house and they were just so gracious and generous and kind to me. So I left England. I came back to the United States for a while and then I, as I got this sort of activist orientation I went back to England sort of back and to hang out with the people from the southeastern region of the country Southampton, Portsmouth, Bornmouth, Fairham. All those little places sort of in the sort of southeast of Lodon, not too far from London, and I got involved in some Animal Liberation Front activities and ended up breaking into a lab. And getting caught. <Laughs>',
      878: '(27:50:21): Bernie Lieving I think I just sort of having fun with some punk rock buddies and having an adventure. And little did I know what would, you know, obviously unfold ver the next few years as my political, sociopolitical and musical taste would, what path I would, that would follow. What would end up happening with me and- you know, to be in 1981 still eating hamburgers and a couple years later to be a vegan and Ive been a vegan since. And for less, less political now, I mean its still a political aspect of me, but its also just who Ive become. Not so much a statement anymore.',
      910: '(20:30:37): Bernie Lieving Yeah, so... so I barely graduated from high school. I mean I did but barely. And I was-you know, in, so probably in 81, yeah, eighty, late 81 I had got a new girlfriend. Who used heroin. And um, that was new for me. I had used, you know, pot and alcohol and some cocaine. But this was new for me to have someone that I was in a relationship with using heroin. And she, Nancy, had been in the punk scene for quite a while in New York and LA. So she knew Darby Crash. And she knew, she knew all the guys in black Flag. She had hung out at the church in LA. She was she was in kind of the New York sort of scene too. She was in an early move in 79 or 80 where she played a young bartender and so she had a- she sort of took me to the next level, I think in my awareness personally and socially, and I learned a lot from her. Because she was very political already. And it wasnt- you know, during our relationship we became vegans together. Um, in 1983? And in 1984 we went to England together. And she, for lack of a better way of saying it, came out and decided- not decided. But she said Im, I dont want to be in this relationship anymore. Im going to be with women. And she moved to Greenham Common which was the anti-nuclear womens camp there in, I believe, in sort of South Central England. So all that time, the few years that we spent together was very instructive for me in terms of sociopolitiical perspective and my first time sort of having being in love with and being aligned with, not only someone who was using heroin,but someone whose sexual identity seemed to evolve while we were together and that also taught me a lot.',
      1220: '(16:26:15): Bernie Lieving A Plasmatics record, the London Calling came out, of course I was buying, you know, Devo cassetts and so I started transitioning. And by 81 I saw the Ramones for the first time and the last time, I only saw them once. (16:44:40): Tamara Santibanez Oh wow. Can you tell me about- could you remember what that felt like? (16:44:15): Bernie Lieving Oh, it was fucking nuts! I saw them at the Santa Cruz civic auditorium. You probably know Santa Cruz. But that was a pretty big venue and a band, a San Francisco band called the Mutants opened for them and- it was just- you knoe they were like, in 81 the sort of pits were a little different than they got like 82, 84, 85. But there was like circles of movement all throughout the floor of the Santa Cruz Civic. And it smelled of clove cigarettes and, you know, it was- I was sort of taking- I feel like I was learning about my new culture <chuckles> if I think about it in that way. Its like fuck look at- this is like, I mean, I can get the hair standing on the back of my neck thinking about right now because it was so intense. And so ah, powerful and a little overwhelming. The energy was just, unmatched. And the Ramones just fucking killed it. I dont know if you listen to that Ramones live record. It really one of the best live rock records, ever. I think it was recorded in London, but so the. the energy and the vibe and the- not the sound trite, but I felt home. And I think I had been looking for a home for much of my, much of my life. Always sort of- because of always being the new person at a new school. Alway having to live someplace for a year or 2 years or 3 years, or my dads in Vietnam and- so I was always sort of disjointed and never felt a part of much of anything. And I think looking back and sort of talking about this now I think I felt like oh man, I am- this is my thing. And I had the beginnings in 81 of a political consciousness that was, that I can name now, but I wouldnt have been able to name it then, which was, you know anti-racist and and anti-homophobic and anti-misogyny and anti-goverment and- I wouldnt have been able to say that then.',
      1500: '(01:21:33:65): Bernie Lieving You know Ill leave you with this one last thing that I dont think i said, and I sort of made a mental note to say this to you at the begining of our interview when I was thinking about it last night or whatever, is that I purposely sought to mark myself to separate myself from the dominant culture. This was a conscientious act on my part similar to whats on the back of your- the little blurb on the back of your book that I love. That tattooing, not consistently for the last forty-five years, but consistently in general is a big fuck you. And Im not, I dont want to be like you, I dont, I dont accept your strictures, I dont- Im against, you know, your wars, Im against your prison industrial complex, Im against the patriarchy. Even if my neck doesnt say fuck the patriarchy, <laughs> so- I wanted to make sure that I got that in there because that was tied to the early days of being a punk even though I didnt have it formulated then, as I have matured and- and I still feel fuck you! And I still dont want to be a part and, and in some ways, which would be interesting for us to talk about, Im more of a part that Ive ever been. I have my own consulting company. You know, so its- the juxtaposition is very conspicuous. <laughs>'
    },

    4: {
      0: '1',
      40: '2',
      70: '3',
      625: '4',
      905: '5 & 6',
      1030: '7 & 8',
      1265: '9',
      1565: '10',
      1670: '11',
      1703: '12 & 13'
    },

    5: {
      0: '1',
      80: '2',
      125: '3',
      160: '4',
      254: '5',
      350: '6',
      500: '7',
      620: '8',
      785: '9',
      818: '10',
      915: '11',
      955: '12'
    }

  }

  var wrapper = $('#wrapper')[0]
  document.addEventListener('scroll', function (event) {
    if (event.target.id == 'wrapper') {
      var point = wrapper.scrollTop
      console.log({point})
      // console.log(point.split(','));
      var message = messages[n][point]
      if (message) {
        $('.transcript-container').text(message)
      }
    }
  }, true)

})
