/* eslint-disable react/prop-types */
import { createContext, useRef, useState } from 'react';
//DATA TO REFERENCE
const architectureListItems = [
  {
    id: 1,
    title: 'Cutting Edge',
    subtitle: 'GPUs',
    info: 'VIDIA Ada Lovelace Architecture',
    architectureSymbol: {
      id: 'm48-gpu-chip-path',
      d: 'M40.79,7.5H7.5v49h49V7.5ZM53.53,24.006V39.994l1.485.4V55.015H40.392l-.4-1.485H24.006l-.4,1.485H8.985V40.391l1.485-.4V24.006l-1.485-.4V8.985H23.608l.4,1.485H39.994l.4-1.485H55.015V23.609ZM14.924,14.924h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0H26.8v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97H37.2Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97ZM14.924,19.379h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0H26.8v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97H37.2Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97ZM14.924,23.833h2.97V26.8h-2.97Zm4.455,0h2.97V26.8h-2.97Zm4.455,0H26.8V26.8h-2.97Zm4.455,0h2.97V26.8h-2.97Zm4.455,0h2.97V26.8h-2.97Zm4.455,0h2.97V26.8H37.2Zm4.455,0h2.97V26.8h-2.97Zm4.455,0h2.97V26.8h-2.97ZM14.924,28.288h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0H26.8v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97H37.2Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97ZM14.924,32.742h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0H26.8v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97H37.2Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97ZM14.924,37.2h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0H26.8v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97H37.2Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97ZM14.924,41.652h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0H26.8v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97H37.2Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97ZM14.924,46.106h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0H26.8v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97H37.2Zm4.455,0h2.97v2.97h-2.97Zm4.455,0h2.97v2.97h-2.97Z',
      fill: '#76b900',
    },
  },
  {
    id: 2,
    title: 'Realistic and Immersive',
    subtitle: 'Graphics',
    info: 'Dedicated Ray Tracing Cores',
    architectureSymbol: {
      id: 'm48-ray-tracing-path',
      d: 'M31.85246,29.43156c-7.85362-.06069-14.26921,6.25671-14.33023,14.11031-.06053,7.85359,6.25711,14.26936,14.11074,14.33005,7.85313,.06066,14.26921-6.25674,14.32974-14.11031,.00049-.03682,.00049-.07364,.00049-.11046,0-7.81096-6.29993-14.1598-14.11074-14.21959Zm0,1.35361c2.91595,.00151,5.74282,1.00859,8.00274,2.85139,.32432,.64609,.59746,1.31673,.81647,2.00573l2.09653,1.35967c.32285,.53099,.60878,1.08324,.85682,1.65299l-2.65068-1.72352c.10975,.58187,.18406,1.16992,.22196,1.76083l3.07393,1.99567c.09498,.41091,.16979,.82634,.22294,1.24475l-3.24667-2.10954c-.0064,.51374-.0438,1.02664-.11073,1.53604l3.48733,2.26678v.02418c0,.35074-.02018,.69546-.0502,1.03916l-3.58822-2.33433c-.10089,.47037-.22196,.92898-.36271,1.37579l3.74964,2.44217c-.06053,.31949-.14125,.63197-.2318,.94341l-3.8402-2.49861c-.17077,.42398-.36222,.83858-.57433,1.24377l3.97111,2.57923c-.11319,.28923-.24066,.57249-.38289,.84867l-4.0405-2.62965c-.24213,.38602-.49411,.75895-.76578,1.11778l4.15271,2.69716c-.16142,.26105-.33269,.51404-.5138,.76199l-4.21324-2.73949c-.30218,.3457-.62502,.6763-.95771,.98976l4.31364,2.805c-.21162,.23183-.42324,.4576-.65504,.67328l-4.37417-2.84333c-.37452,.30307-.76479,.58599-1.16933,.84766l4.47506,2.91084c-.26182,.20159-.52413,.3951-.80613,.57452l-4.53559-2.95317c-.47098,.25001-.95574,.47375-1.45133,.67027l4.6665,3.03179c-.33269,.16228-.66538,.31143-1.00791,.4445l-4.75755-3.09026c-.6073,.17972-1.22741,.31448-1.8544,.40316l4.93866,3.20515c-.43604,.10261-.877,.182-1.32141,.23786l-5.08876-3.30293c-.17127,.00606-.34253,.02621-.52413,.02621-.74658-.00477-1.49169-.07219-2.22744-.20159l5.46279,3.54783c-.74068-.04463-1.47643-.15524-2.19742-.3306l-6.41017-4.16569c-.17127-.07862-.34253-.16831-.52413-.25198-4.45537-5.54126-3.57444-13.64495,1.96661-18.10011,2.25795-1.81539,5.06219-2.81608,7.95944-2.84022l-.00049,.00003ZM57,12.50269l-6.32946-6.37504-4.97901,5.02039,1.159,1.16918-2.69104,1.35462,5.35206,5.39131,1.3406-2.70827,1.16933,1.16816,4.97852-5.02036Zm-6.32946-4.45999l4.42486,4.45999-3.07393,3.10536-4.4347-4.45999,3.08377-3.10536Zm-1.52171,8.73355l-2.72155-2.73447,1.42131-.71462,2.00598,2.01582-.70573,1.43328Zm-7.21679,.46667h4.03164v4.06289h-1.3406v-1.75074l-8.69814,8.76074L18.81065,13.94403l.85682-1.03513,16.17675,13.58057,7.83148-7.88691h-1.74366v-1.35964Zm0,6.77112h4.03164v4.06289h-1.3406v-1.75074l-3.35642,3.38558-.95771-.95753,3.36626-3.38558h-1.74366l.00049-1.35462ZM11.69475,6.40888c-2.61623,.02341-4.71818,2.16322-4.69456,4.77939,.01624,1.80315,1.05466,3.44079,2.67874,4.22428v3.185h1.3406v.6763h1.3406v-.6763h1.35044v-3.185c2.35638-1.13673,3.3451-3.96846,2.20825-6.3249-.78349-1.62413-2.42085-2.66262-4.22407-2.67877Zm.66538,9.47435v1.35967h-1.3406v-1.35462l1.3406-.00504Zm.53398-1.58845l1.04827-2.09948-1.20969-.60475-1.03793,2.1025-1.04827-2.1025-1.19935,.60475,1.03793,2.09948c-1.73333-.66522-2.59901-2.60953-1.93363-4.34267s2.60934-2.59886,4.34267-1.93363c1.73333,.66525,2.59901,2.60953,1.93363,4.34267-.34155,.88946-1.04433,1.59224-1.93363,1.93363Z',
      fill: '#76b900',
    },
  },
  {
    id: 3,
    title: 'AI-Accelerated',
    subtitle: 'Performance',
    info: 'VIDIA DLSS 3',
    architectureSymbol: {
      id: 'm48-nvidia-gpu-cloud-ngc-catalog-path',
      d: 'M55.269,38.729V7.5H12.962v4.625h-4.231v4.284H4.5V49.076H41.423c.87025,4.2527,4.57007,7.33547,8.91,7.424,5.19275-.14285,9.29182-4.45878,9.167-9.652,.0231-3.24046-1.56171-6.2816-4.231-8.119ZM14.372,8.985H53.859v28.956c-.89434-.39129-1.84783-.63025-2.821-.707V12.125H14.372v-3.14Zm-4.231,4.625H49.628v23.624c-.97317,.07675-1.92666,.31571-2.821,.707V16.409H10.141v-2.799ZM5.91,47.591V17.891H45.4v20.791h.073c-2.7105,1.83052-4.3247,4.89637-4.3,8.167,0,.251,.018,.5,.035,.742H5.91Zm44.423,7.424c-4.51057,.23306-8.35604-3.23454-8.5891-7.74511-.23307-4.51057,3.23454-8.35604,7.7451-8.5891,4.51057-.23307,8.35604,3.23454,8.58911,7.74511,.00726,.14058,.01089,.28133,.01089,.4221,.10579,4.39405-3.36234,8.04597-7.756,8.167Zm4.237-12.186l1,1.05-6.638,6.989-3.818-4.019,1-1.05,2.821,2.97,5.635-5.94Zm-19.85-12.529c1.28876-.07061,2.27626-1.1726,2.20565-2.46135-.0652-1.19009-1.01556-2.14044-2.20565-2.20565-.59316,.00291-1.15904,.24952-1.565,.682l-5.317-2.8c.0176-.10617,.02796-.21342,.031-.321,.05815-1.22359-.88663-2.26264-2.11022-2.32078-1.22359-.05815-2.26263,.88663-2.32078,2.11022-.00333,.07015-.00333,.14042,0,.21056,.00313,.1079,.01349,.21548,.031,.322l-5.369,2.827c-.40024-.40541-.94531-.63496-1.515-.638-1.28876,.07061-2.27626,1.1726-2.20565,2.46135,.06521,1.19009,1.01556,2.14044,2.20565,2.20565,.20685-.00279,.41212-.0365,.609-.1l1.565,2.472h0l-1.6,2.529c-.18613-.0568-.37941-.08677-.574-.089-1.28876,.07061-2.27626,1.1726-2.20565,2.46135,.06521,1.19009,1.01556,2.14044,2.20565,2.20565,.59261-.00275,1.15794-.24943,1.563-.682l5.319,2.8c-.01751,.10652-.02787,.21409-.031,.322-.05815,1.22359,.88663,2.26263,2.11022,2.32078,1.22359,.05814,2.26263-.88663,2.32078-2.11022,.00333-.07014,.00333-.14041,0-.21056-.00304-.10758-.0134-.21483-.031-.321l5.319-2.8c.40506,.43257,.97039,.67924,1.563,.682,1.28876-.07061,2.27626-1.1726,2.20565-2.46135-.0652-1.19009-1.01556-2.14044-2.20565-2.20565-.19459,.00223-.38787,.0322-.574,.089l-1.6-2.529h0l1.6-2.53c.18708,.05515,.38097,.08376,.576,.085Zm-2.186,7.534l-4.82,2.538,1.993-3.146,.722-1.14,2.106,1.108c-.04129,.21167-.04129,.42933,0,.641l-.001-.001Zm-13.761-.641l2.106-1.108,2.715,4.287-4.82-2.538c.04132-.21167,.04132-.42933,0-.641h-.001Zm9.067-4.131c.03942-.21185,.03942-.42915,0-.641l2.106-1.108,.905,1.428-.905,1.428-2.106-1.107Zm-.623-1.973c-.23893-.24711-.53245-.43479-.857-.548v-4.892l2.8,4.419-1.943,1.021Zm-1.563,2.5c-.46826,.0243-.86756-.3356-.89186-.80386-.0243-.46826,.3356-.86756,.80386-.89186,.46826-.0243,.86756,.3356,.89186,.80386,.00076,.01461,.00114,.02923,.00114,.04386,.01175,.45659-.34843,.83646-.805,.849v-.001Zm-4.291,.581l-.905-1.428,.905-1.428,2.107,1.108c-.04132,.21167-.04132,.42933,0,.641l-2.107,1.107Zm2.73-3.081l-1.942-1.022,2.8-4.419v4.893c-.32524,.11288-.61922,.30099-.858,.549v-.001Zm0,3.305c.23832,.24738,.53157,.43512,.856,.548v4.893l-2.8-4.419,1.944-1.022Zm2.266,.548c.32455-.11321,.61807-.30089,.857-.548l1.941,1.022-2.8,4.419,.002-4.893Zm4.07-5.544h0l-2.715-4.287,4.82,2.538c-.01746,.10518-.02782,.21143-.031,.318,.00311,.10857,.01347,.21681,.031,.324l-2.105,1.107Zm-9.55,0l-2.1-1.1c.01231-.08454,.02032-.16965,.024-.255-.00225-.12943-.01462-.2585-.037-.386l4.826-2.541-2.713,4.282Zm13.841-2.279c.46884-.02375,.86816,.33707,.89191,.80591,.02375,.46884-.33707,.86816-.80591,.89191-.46884,.02375-.86816-.33707-.89191-.80591-.00074-.01463-.0011-.02927-.00109-.04391-.01118-.45696,.35004-.83654,.807-.848Zm-9.067-4.771c.46878-.02485,.86896,.33503,.89381,.80381,.02485,.46878-.33502,.86896-.80381,.89381-.46878,.02485-.86895-.33503-.89381-.80381-.00081-.01525-.00121-.03053-.00119-.04581-.01119-.45658,.34944-.836,.806-.848h-.001Zm-9.872,5.69c.02264-.44512,.40184-.7876,.84696-.76496s.7876,.40184,.76496,.84696c-.02185,.42957-.37679,.76651-.80692,.766-.45553-.01362-.81465-.39239-.804-.848h-.001Zm2.866,1.846l1.443,.76h0l-.481,.76-.962-1.52Zm.962,4.2l.481,.76h0l-.794,.419-.649,.342,.962-1.521Zm-3.022,4.284c-.46884,.02375-.86816-.33707-.89191-.80591s.33707-.86816,.80591-.89191c.46884-.02375,.86816,.33707,.89191,.80591,.00072,.01429,.00109,.0286,.00109,.04291,.00895,.45559-.35148,.83299-.807,.845v.004Zm9.067,4.772c-.46878,.02485-.86896-.33503-.89381-.80381-.02485-.46878,.33502-.86895,.80381-.89381,.46878-.02485,.86895,.33503,.89381,.80381,.00081,.01525,.00121,.03053,.00119,.04581,.00896,.45466-.35043,.83146-.805,.844v.004Zm9.872-5.622c-.02264,.44512-.40184,.7876-.84696,.76496s-.7876-.40184-.76496-.84696c.02185-.42957,.37679-.76651,.80692-.766,.45473,.01308,.81397,.39017,.805,.845v.003Zm-2.866-1.918l-.649-.342-.794-.419h0l.481-.76,.962,1.521Zm-1.443-4.956l1.443-.76-.96,1.516-.483-.756Z',
      fill: '#76b900',
    },
  },
  {
    id: 4,
    title: 'Game-Winning',
    subtitle: 'Responsiveness',
    info: 'VIDIA Reflex low-latency platform',
    architectureSymbol: {
      id: 'm48-accuracy-path',
      d: 'M56.27799,14.36654l-4.7513-.95052,1.32161-1.32161-.94271-.94336-1.29167,1.29167-.9349-4.67578-6.72266,6.72135c-3.2832-2.05794-7.05518-3.15495-10.95638-3.15495-11.39583,0-20.66667,9.27083-20.66667,20.66667s9.27083,20.66667,20.66667,20.66667,20.66667-9.27083,20.66667-20.66667c0-3.875-1.08301-7.63346-3.11914-10.90299l6.73047-6.73047Zm-6.63216,.0332l3.92773,.78516-5.4668,5.4668-3.92708-.78516-.77246-3.85938,.16585-.24935,5.28695-5.28646,.78581,3.92839Zm1.6875,17.60026c0,10.66016-8.67318,19.33333-19.33333,19.33333s-19.33333-8.67318-19.33333-19.33333S21.33984,12.66667,32,12.66667c3.54655,0,6.97868,.97005,9.9873,2.79102l-.04199,.04167,.93652,4.67643-1.48079,1.48047c-2.48796-2.26302-5.78092-3.65625-9.40104-3.65625-7.7194,0-14,6.2806-14,14s6.2806,14,14,14,14-6.2806,14-14c0-3.62044-1.39307-6.91276-3.65625-9.40104l1.44987-1.44987,4.75195,.94987,.0306-.0306c1.79867,2.99544,2.75716,6.41081,2.75716,9.93164Zm-19.05713,.66667l4.39079-4.39063c.82113,1.02604,1.33301,2.3099,1.33301,3.72396,0,3.30859-2.69141,6-6,6s-6-2.69141-6-6,2.69141-6,6-6c1.41374,0,2.69759,.51172,3.72428,1.33333l-4.39095,4.39063v.94271h.94287Zm4.41292-6.29883c-1.27214-1.06055-2.9069-1.70117-4.68913-1.70117-4.04362,0-7.33333,3.28971-7.33333,7.33333s3.28971,7.33333,7.33333,7.33333,7.33333-3.28971,7.33333-7.33333c0-1.78255-.6403-3.41667-1.70133-4.68945l3.76937-3.76888c2.02246,2.24479,3.2653,5.20573,3.2653,8.45833,0,6.98438-5.68229,12.66667-12.66667,12.66667s-12.66667-5.68229-12.66667-12.66667,5.68229-12.66667,12.66667-12.66667c3.2526,0,6.21322,1.24284,8.45866,3.26563l-3.76953,3.76888Z',
      fill: '#76b900',
    },
  },
  {
    id: 5,
    title: 'Built for',
    subtitle: 'Live Streaming',
    info: 'VIDIA Encoder',
    architectureSymbol: {
      id: 'm48-inference-encode-path',
      d: 'M52.26294,23.12848h-.5l-9.45117-5.45801h-5.40918l-9.45117-5.45898h-5.40918L12.59106,6.7525H6.3313V57.2475h6.25977l9.45117-5.45898h5.40918l9.45117-5.45898h5.40918l9.45117-5.45801h5.90576V23.12848h-5.40576Zm-1.34717,6.823v6.97101l-2.13818-4.92603,2.13818-4.92603v2.88104ZM13.09155,44.96448V13.74646l3.9502,18.25299-3.9502,18.25299v-5.28796Zm22.96387-4.09399l-2.56201-8.87097,2.56299-8.87-.00098,17.74097Zm1.34717-12.28198v-4.09399h4.05176v4.09399h-4.05176Zm4.05176,1.36401v4.09399h-4.05176v-4.09399h4.05176Zm-4.05176,5.45898h4.05176v4.09399h-4.05176v-4.09399Zm5.40918,4.09399V21.61548l4.5,10.38397-4.5,10.38397v-2.87793Zm.75879-19.53699l7.15186,4.13098-2.68408,6.20001-4.46777-10.33099Zm-2.11621,3.16101h-4.05176v-4.09399h4.05176v4.09399Zm-8.66113,6.43402l-4.40576-15.23499,7.5459,4.354-3.14014,10.88098Zm-10.25098,4.48297v-4.09399h4.05322v4.09399h-4.05322Zm4.05322,1.36499v4.09399h-4.05322v-4.09399h4.05322Zm-4.05322-6.823v-4.09399h4.05322v4.09399h-4.05322Zm0-5.45898v-4.09399h4.05322v4.09399h-4.05322Zm-1.34717,0v21.664l-2.77588-12.79999,2.77588-12.79999v3.93597Zm1.34717,17.742h4.05322v4.09399h-4.05322v-4.09399Zm5.40918,4.09399V17.67047l4.13281,14.32898-4.13281,14.328h0v-1.36194Zm-1.35596-27.29401h-4.05322v-4.09399h4.05322v4.09399Zm-8.86377,11.13501L13.39673,8.79053l7.70801,4.448-3.37305,15.56799Zm0,6.388l3.37305,15.56799-7.70801,4.448,4.33496-20.01599Zm4.81104,11.13501h4.05322v4.09399h-4.05322v-4.09399Zm10.25098-11.89099l3.14014,10.88397-7.5459,4.354,4.40576-15.23798Zm4.60889,6.43298h4.05176v4.09399h-4.05176v-4.09399Zm10.63623-7.16901l2.68408,6.20001-7.15186,4.13202,4.46777-10.33203ZM7.68286,8.11749h4.05078v4.09399H7.68286v-4.09399Zm0,5.45898h4.05078v4.09399H7.68286v-4.09399Zm0,5.45801h4.05078v4.09399H7.68286v-4.09399Zm0,5.45898h4.05078v4.09399H7.68286v-4.09399Zm0,5.45801h4.05078v4.09399H7.68286v-4.09399Zm0,5.45898h4.05078v4.09399H7.68286v-4.09399Zm0,5.45898h4.05078v4.09399H7.68286v-4.09399Zm0,5.45801h4.05078v4.09399H7.68286v-4.09399Zm0,5.45898h4.05078v4.09399H7.68286v-4.09399Zm48.63184-12.28198h-4.05176v-4.09399h4.05176v4.09399Zm0-5.45898h-4.05176v-4.09399h4.05176v4.09399Zm-4.05176-5.45801v-4.09399h4.05176v4.09399h-4.05176Z',
      fill: '#76b900',
    },
  },
  {
    id: 6,
    title: 'AI-Enhanced Voice and',
    subtitle: 'Video',
    info: 'RTX Video Super Resolution and VIDIA Broadcast',
    architectureSymbol: {
      id: 'm48-live-talk-on-demand-path',
      d: 'M56.66992,44.66699V14H7.33008v30.66699H27.12988l-1.06982,4h-4.06006v1.33301h20v-1.33301h-4.06006l-1.06982-4h19.7998ZM8.66992,15.33301H55.33008v28H8.66992V15.33301Zm27.89014,33.33398h-9.12012l1.06982-4h6.97998l1.07031,4Zm-26.56006-6.66699H54V16.66699H10v25.33301Zm1.33008-24H52.66992v22.66699H11.33008V18Zm20.66992,16c4.05029,.00214,7.33594-3.2796,7.33789-7.33008s-3.27979-7.33575-7.33008-7.33789c-4.05029-.0022-7.33594,3.2796-7.33789,7.33008v.00592c.00098,4.04816,3.28174,7.32983,7.33008,7.33197Zm0-13.33301c3.31348,0,6,2.68628,6,6s-2.68652,6-6,6-6-2.68628-6-6,2.68652-6,6-6Zm-11.33008,14.66602h26.66016v1.33398H20.66992v1.33301h-1.33984v-1.33301h-2.66016v-1.33398h2.66016v-1.33301h1.33984v1.33301Zm9.33008-12.57898v7.82501l5.87012-3.91199-5.87012-3.91302Zm1.33008,2.49103l2.12988,1.422-2.12988,1.41998v-2.84198Z',
      fill: '#76b900',
    },
  },
  {
    id: 7,
    title: 'Fast-Track Your',
    subtitle: 'Creativity',
    info: 'VIDIA Studio',
    architectureSymbol: {
      id: 'm48-3d-manipulation-path',
      d: 'M46.906,35.607l2.094,7.764-7.824,2.079-1.753-1,6.849-1.819-14.272-8.18-14.272,8.176,6.849,1.819-1.753,1-7.824-2.075,2.1-7.765,1.755-1-1.835,6.793,14.271-8.174V16.873l-5.021,4.974v-2.01l5.73-5.684,5.73,5.684v2.009l-5.014-4.974v16.349l14.271,8.174-1.835-6.795,1.754,1.007Zm8.994,7.952c.63929,.68003,.75752,1.69861,.291,2.507-.46898,.81814-1.42352,1.22624-2.339,1-8.37831,12.06742-24.95286,15.05803-37.02028,6.67972-2.60727-1.81021-4.86951-4.07244-6.67972-6.67972-.91548,.22624-1.87002-.18186-2.339-1-.46808-.80777-.35146-1.82685,.287-2.508C1.8108,30.52087,7.28107,14.85379,20.3182,8.56458c3.01962-1.45669,6.29068-2.3205,9.6358-2.54458,.34265-1.12997,1.53645-1.76823,2.66643-1.42558,.68347,.20725,1.21832,.7421,1.42558,1.42558,13.74497,.99393,24.40361,12.40923,24.454,26.19,.00809,3.93155-.88115,7.81309-2.6,11.349ZM31.285,6.631c0,.39488,.32012,.715,.715,.715s.715-.32012,.715-.715h0c-.01478-.39516-.3471-.70352-.74226-.68874-.37443,.014-.67474,.31431-.68874,.68874h.001ZM10.029,45.615c.33984-.1934,.45855-.62568,.26515-.96552-.00104-.00183-.00209-.00366-.00315-.00549-.19911-.34012-.63517-.45616-.977-.26-.33984,.1934-.45855,.62568-.26515,.96552,.00104,.00183,.00209,.00366,.00315,.00549,.19982,.33919,.63502,.455,.977,.26Zm42.609,.693c-.72498-.9222-.5651-2.25751,.35711-2.98249,.22969-.18057,.49417-.31181,.77689-.38551,.28081-.07384,.57354-.09084,.861-.05,1.60962-3.32979,2.44221-6.98158,2.435-10.68-.04781-13.01651-10.10213-23.8052-23.083-24.769-.45828,1.09601-1.71829,1.61299-2.81429,1.1547-.52172-.21815-.93655-.63298-1.15471-1.1547-12.98087,.9638-23.03519,11.75249-23.083,24.769-.00785,3.69893,.82513,7.35125,2.436,10.681,.2868-.04076,.57886-.02376,.859,.05,1.13512,.29591,1.81542,1.45599,1.51951,2.59111-.0737,.28272-.20494,.5472-.38551,.77689,7.94595,11.39805,23.62737,14.19653,35.02542,6.25058,2.4361-1.69829,4.55229-3.81447,6.25058-6.25058v-.001Zm2.051-1.921h-.007c-.1073-.06108-.22854-.09345-.352-.094-.25451,.00182-.4896,.13642-.62,.355-.19643,.3381-.08158,.77142,.25652,.96785,.00182,.00106,.00365,.00211,.00549,.00315,.34224,.19483,.77752,.07855,.977-.261,.19754-.33617,.08516-.76883-.25101-.96637-.00266-.00156-.00532-.0031-.008-.00463h-.001Z',
      fill: '#76b900',
    },
  },
  {
    id: 8,
    title: 'Performance and',
    subtitle: 'Reliability',
    info: 'Game Ready and Studio Drivers',
    architectureSymbol: {
      id: 'm48-download-path',
      d: 'M48.136,45.843l-1.622,5.829H17.414l-1.622-5.829h-7.319l3.242,11.657H52.2l3.459-11.657h-7.523Zm2.928,10.2H12.877l-2.433-8.743h4.188l1.622,5.829h31.422l1.624-5.829h4.359l-2.595,8.743Zm.7-30.6h-9.964v-7.286H22.131v7.286H12.165l19.8,22.249,19.799-22.249Zm-28.12,1.457v-7.286h16.643v7.286h8.19l-16.512,18.551L15.454,26.9h8.19ZM41.8,6.5H22.131V15.243h19.669V6.5Zm-1.513,7.286H23.644V7.957h16.643v5.829Z',
      fill: '#76b900',
    },
  },
];

const architectureListItemsVer2 = [
  'VIDIA Ada Lovelace Architecture',
  'Ahead of its Time, Ahead of the Game',
  {
    content: [
      {
        id: 1,
        title: 'New Streaming Multiprocessors',
        info: 'Up to 2X performance and power efficiency',
      },
      {
        id: 2,
        title: 'Fourth-Gen Tensor Cores',
        info: 'Up to 4X performance with DLSS 3 vs. brute force rendering',
      },
      {
        id: 3,
        title: 'Third-Gen RT Cores',
        info: 'Up to 2X ray tracing performance',
      },
    ],
  },
  {
    learn: {
      text: 'Learn More About the Architecture',
      symbol: {
        d: 'M10 7L15 12L10 17',
        stroke: '#76B900',
        width: '2.5',
        linecap: 'round',
        linejoin: 'round',
      },
    },
  },
];

//CREATE THE CONTEXT
const ArchitectureContext = createContext();
//CREATE THE PROVIDER
export const ArchitectureProvider = ({ children }) => {
  //ESTABLISH STATES
  const architectureList = useRef(architectureListItems);
  const architectureListVer2 = useRef(architectureListItemsVer2);
  const [isScrolled, setisScrolled] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [isFadedOut, setIsFadedOut] = useState(true);
  //FUNCTIONS IF NEED BE

  //RETURN PROPERTIES NEEDED
  return (
    <ArchitectureContext.Provider
      value={{
        architectureList,
        architectureListVer2,
        isScrolled,
        setisScrolled,
        isFaded,
        setIsFaded,
        isFadedOut,
        setIsFadedOut,
      }}
    >
      {children}
    </ArchitectureContext.Provider>
  );
};

//Export the Context
export default ArchitectureContext;
