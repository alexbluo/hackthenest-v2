// run batch email sends from here
// max 500 per batch
const dotenv = require("dotenv");
const { ServerClient } = require("postmark");

dotenv.config();

// copy paste from api
// const emails = ["1011811@lcps.org","1043381@lcps.org","1094254@lcps.org","10f7c7@gmail.com","1543777@fcpsschools.net","1816416@fcpsschools.net","1woodsky@gmail.com","2027amohan@tjhsst.edu","874080@lcps.org","aarav.verma2024@gmail.com","aarezahmad786@gmail.com","aarionkingjoseph@gmail.com","abhinav.gupta@outlook.de","abidemiola2@gmail.com","aboominister@gmail.com","ac7160047@gmail.com","adm664y@gmail.com","aferata03@gmail.com","aidenpepoli@icloud.com","alchen2626@gmail.com","aldanaatassi@gmail.com","alexbluo01@gmail.com","alexluo92823@gmail.com","allejasmitha@gmail.com","alwakilnylah@gmail.com","amulyag@umich.edu","andy.tharakan@gmail.com","andysunnyx@gmail.com","andywcruz3005@gmail.com","aneeshkingjoseph6@gmail.com","angelroy0913@gmail.com","anishnagariya07@gmail.com","anishyarra@gmail.com","ansh.chadalavada@gmail.com","anvitaa.rudharraju@gmail.com","anwitakathiravan@gmail.com","anyaphillip@gmail.com","araf.reshad@gmail.com","areggevorgyan5@gmail.com","arshakir999@gmail.com","aryan.sharma0714@gmail.com","aryan.umale@gmail.com","as6228490@gmail.com","ashley2007lin@gmail.com","ashleykalford@gmail.com","ashwathbabu@gmail.com","astownleymail@gmail.com","atassiwork@gmail.com","azhou0417@gmail.com","babitha14k@gmail.com","batesamriel@gmail.com","beamlak66@gmail.com","ben.quek261@gmail.com","benparth21@gmail.com","bluetrees95@gmail.com","borghesesimon.d@gmail.com","brookewilkes809@gmail.com","bryanyuli2026@gmail.com","bziaire6@gmail.com","carter.lyles05@gmail.com","chiso1223@gmail.com","chrischris0921@gmail.com","cj171bob21@gmail.com","cluu303420715@gmail.com","codyzgao@gmail.com","cookiejarjakob@gmail.com","corymyhomie@gmail.com","cw24681134@gmail.com","danielgaofei@gmail.com","danieljy0907@gmail.com","daudhtm@gmail.com","dbs3ssg@gmail.com","devin.h.chen@gmail.com","devnarang083@gmail.com","dhilanvibhakar@gmail.com","dhruvdas1124@gmail.com","diamondblazer59@gmail.com","diegoef555@gmail.com","digonto.chatterjee@gmail.com","djwags1000@gmail.com","dr.ahmed8080@gmail.com","drheba987@gmail.com","durgairajan.india@gmail.com","dwangflmd@gmail.com","egamer8544@gmail.com","ekarim530@gmail.com","elfkingyt22334@gmail.com","ellen.shigeno@gmail.com","emelyn007gomez@gmail.com","ethan.m.hahn@gmail.com","ethan.wanq@gmail.com","ethangao6@gmail.com","etzhcoder@gmail.com","evanfigs@gmail.com","ezekielspring93@gmail.com","fernandorafaeljosh@gmail.com","fonseca.diego.feeshy@gmail.com","gavin.f.tantleff@gmail.com","gavrieltarmy@gmail.com","ghjeng@icloud.com","glebgodynskiy@gmail.com","greyson.schroeher@gmail.com","gskyasa@gmail.com","harini.snowdrops@gmail.com","harrison.tangyt@gmail.com","hdayra200@gmail.com","helenguo26@gmail.com","hello@hackthenest.org","heng@yeheng.org","hetav.j.patel@gmail.com","highsmithmadison0@gmail.com","hjfang6@gmail.com","hwkw0601@gmail.com","idhantag@gmail.com","innovationinfinite8@gmail.com","j902kajeoa@gmail.com","jackobhii@gmail.com","jacky20878@gmail.com","jackz.exe@gmail.com","jadenhou19@gmail.com","jadenmengl@gmail.com","jasmine.algama@gmail.com","jasonzhuang8716@gmail.com","jaylynneyang@gmail.com","jaymaheshwari2603@gmail.com","jaysinghvardhan@gmail.com","jayvar999@gmail.com","jazzyjeshua@gmail.com","jeffery.z.liu@gmail.com","jhoop1026@gmail.com","joelchem@outlook.com","joshtag05@gmail.com","josmo314@gmail.com","joywang0222@gmail.com","jsanya784@gmail.com","justin.sw.kim13@gmail.com","justinheller922@gmail.com","justzh2016@gmail.com","kaigrigsby62@gmail.com","kartavya.gaur@gmail.com","kashvi.tiwari@gmail.com","kaylabutv@gmail.com","kdnc.1225@gmail.com","kendotzhou@gmail.com","kiettran0816@gmail.com","kimdanny0603@gmail.com","kiyoma.algama@gmail.com","kjk@skyhopper.net","kompella.arun@gmail.com","kosa3200@gmail.com","kotadreemurr@gmail.com","kruthisudigali@gmail.com","kubra.b.ulusoy@gmail.com","kwanlee2754@gmail.com","largolapp@gmail.com","lewisguy00@gmail.com","lightskinchris01@icloud.com","lilaariail155@gmail.com","ljselaru@gmail.com","logan.ye.ji@gmail.com","lucascarpuic@gmail.com","luna.may.singh@gmail.com","luobumbo13@gmail.com","mac9ros@gmail.com","malharkhisty@gmail.com","markdavis0601@gmail.com","maxwellwang84@gmail.com","me.fast.learn@gmail.com","megleyb@yahoo.com","meisske.ske@gmail.com","merchantkenzi@gmail.com","micha@2231puppy.tech","musaf531@gmail.com","muzniumar3@gmail.com","mylignets@gmail.com","nagashisir.sadineni@gmail.com","nahommebrate8982@gmail.com","nailataiyabah@gmail.com","nallurisuha@gmail.com","needmorebooks808@gmail.com","nikkylexy@gmail.com","nyates561@gmail.com","nynnathi@gmail.com","omarcopyb@gmail.com","omersalim2006@gmail.com","oogabooga1271@gmail.com","palifonix@gmail.com","paperlutherking@gmail.com","parkerzhang06@gmail.com","party111222333@gmail.com","paula.ramirez.castillo@gmail.com","pbahra06@gmail.com","pixelmaster9900@gmail.com","pradhamk@gmail.com","princeamirjan44@gmail.com","prishat50@gmail.com","priya929g@gmail.com","radinpourassad@gmail.com","rafiqulsamantha126@gmail.com","rahulm7411@gmail.com","raihanhasan427@gmail.com","rajneet.sawhney@gmail.com","randumbthingsxd@gmail.com","rayrayjk01@gmail.com","rayshen071@gmail.com","rayshen314@gmail.com","reyatt30@gmail.com","rishadzzzz@gmail.com","rishiseshadri08@gmail.com","rishisun13@gmail.com","ritesh@bayunsystems.com","robert.barkalov@gmail.com","rrgambhir2005@gmail.com","ruhaansingh102@gmail.com","rzarka1298@gmail.com","safarib2515@gmail.com","sai.abhi.prabhu@gmail.com","saibi.kerim@gmail.com","saidomma8@gmail.com","saisiddhish@gmail.com","samsdakota15@gmail.com","samuellkkang@gmail.com","sapnajoy2003@gmail.com","sarah.m.wilkin@gmail.com","sarahy8291@gmail.com","sashsarkisov@gmail.com","sathursanan1017@gmail.com","sawhney.simar@gmail.com","sdantzler@gmail.com","seanhall1226@gmail.com","semirskemal@gmail.com","shadowgamer0118@gmail.com","shaziya.muhsin@gmail.com","shrayus@gmail.com","shreyasbachu1355@gmail.com","shreyasbhar@gmail.com","siddjain362@gmail.com","sienna.gowda@gmail.com","singhaniaakshat1@gmail.com","siyagoel@stanford.edu","sohan.algama@gmail.com","songhanglin2@gmail.com","sonith.sunku@gmail.com","sriramchalam@gmail.com","srishti@xtenav.com","staticsahib30241@gmail.com","sumuriddhi@gmail.com","susan@aarhus.us","suzannemblonder@gmail.com","tanmay25bijalwan@gmail.com","tanuma257@gmail.com","teamzay06@gmail.com","teoh4770@mylaurier.ca","thanhtranbpi@gmail.com","thapliyal.prakhar@gmail.com","thatsalotofenslavedmoisture@gmail.com","thekyleliao@gmail.com","tinuvanapamula@gmail.com","tojuokonedo@gmail.com","tomatopotato.spam@gmail.com","trand5036@gmail.com","tristan.carter66@gmail.com","tristan.yeet66@gmail.com","tyesha9578@gmail.com","tyler.jeong@gmail.com","varunsr898@gmail.com","vedmborade@gmail.com","victorliu5000@gmail.com","victorp10141@gmail.com","vinay7.karthik@gmail.com","vinayasharma08@gmail.com","vishnupvarma@gmail.com","walterchats1864@gmail.com","wangbenjamin05@gmail.com","wantinglilyshen@gmail.com","weerhero@gmail.com","wehbehadjsidi67@gmail.com","winona.whitener@gmail.com","woolfordkevin2@gmail.com","ya4212011@gmail.com","yosmehily0727@gmail.com","yousafswim@gmail.com","ytgetachew.cs@gmail.com","yu.cao20041208@gmail.com","ywang155@berkeley.edu","zachappella@gmail.com","zalexep1@gmail.com","ziaireb223@gmail.com","zubair1991139@gmail.com"];
// const emails = ["thomasli2025@gmail.com"]
const emails = ["thomasli2025@gmail.com", "1556316@fcpsschools.net","1662636@fcpsschools.net","1772326@fcpsschools.net","1906382@fcpsschools.net","2027sjain@tjhsst.edu","adhyajay0@gmail.com","aidanbarbosa1@outlook.com","ajboycemail@gmail.com","aklankcool@gmail.com","alex.lopatin01@gmail.com","amyebah.x@gmail.com","andradekate1776@gmail.com","andrewgao100@gmail.com","bobbyf8642@gmail.com","capi_nemoo@protonmail.com","chat.arjunc@gmail.com","connorcourtney1101@gmail.com","fonseca.diego.feeshy@gmail.com","griffwong@icloud.com","harriskd17@gmail.com","hkchoi76@gmail.com","honeyyakkala@gmail.com","janani.satish@gmail.com","jerryli.md@gmail.com","jjoh858@icloud.com","jpatel1206@gmail.com","juvechamps21@gmail.com","kameron.lee1290@gmail.com","kancharlapranay@gmail.com","kawookieoradam@gmail.com","kedarrkalluri@gmail.com","kevinx8017@gmail.com","leonard.h.shi@gmail.com","mdganatra28@gmail.com","minc31415@gmail.com","music80001@gmail.com","nayelr123@gmail.com","nehantkrazykat@gmail.com","nicholas.kinberg@gmail.com","omarkaziza@gmail.com","oosman2x@gmail.com","patcdeng@gmail.com","prorepatir@gmail.com","rayshen314@gmail.com","reyatt30@gmail.com","sachdeva.aahan@gmail.com","sailfin2008@gmail.com","shahdhairya51@gmail.com","shreyhaan0904@gmail.com","shrys.jain@gmail.com","strayyy123@gmail.com","tadesseselamawit123@gmail.com","thapliyal.prakhar@gmail.com","tirumale.madhav@gmail.com","vihananand2010@gmail.com"]
// get incomplete emails and use them

console.log(process.env.POSTMARK_API_TOKEN)

const client = new ServerClient(process.env.POSTMARK_API_TOKEN);

// Transactional Test
// client.sendEmailWithTemplate({
//   From: "hello@hackthenest.org",
//   To: "thomasli2025@gmail.com",
//   TemplateAlias: "hackerConfirmation",
//   TemplateModel: {
//     name: "thomas",
//     email: "thomasli2025@gmail.com",
//   },
//   MessageStream: "outbound",
// }).then(response => {
//   console.log("Emails sent successfully:", response);
// }).catch(error => {
//   console.error("Error sending emails:", error);
// });
// return

// edit other routes to include name
client.sendEmailBatchWithTemplates(
  emails.map((email) => {
    return {
      From: "hello@hackthenest.org",
      To: email,
      TemplateAlias: "deadlineNotice1",
      TemplateModel: {
        email,
      },
      TrackLinks: "None",
      MessageStream: "broadcast",
    };
  })
).then(response => {
  console.log("Emails sent successfully:", response);
}).catch(error => {
  console.error("Error sending emails:", error);
});
