import React from "react";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import People from "./People";

import "./PeopleList.css";

function PeopleList() {
  return (
    <div className="peopleList">
      <div className="peopleSide">
        <h3>People</h3>
        <VideoCallIcon />
        <SearchIcon />
        <MoreHorizIcon />
      </div>

      <People
        profileSrc="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/61773499_2395925907363050_7117871780072521728_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XtmQ0PLUWGoAX-dGcoM&_nc_oc=AQnABPgGSf2J4qgH_swianCDVDX2grY4ghMQfyTwbhbvmzp_-LxFyRW4m8C9enYOwsBS6LzH0qFjQYeyIb_Yf22g&_nc_ht=scontent.fkhi22-1.fna&oh=35d2f0c458f1eb82eab4ad1c9ff1b060&oe=6126FF56"
        title="Saad Ahmed"
      />
      <People
        profileSrc="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/120001196_10221288164325869_1489685899080916846_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HYzM4LJG5WwAX_AlxIy&_nc_ht=scontent.fkhi22-1.fna&oh=5c001069efebc468dcb818fa2570ac4e&oe=61263240"
        title="Atir Naveed"
      />
      <People
        profileSrc="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/133938315_3599856676758587_136354274592597419_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=aPG_UiOfLSYAX80EhPw&_nc_ht=scontent.fkhi22-1.fna&oh=a93c38dbe58c085d0315d1d2ad7573d0&oe=61266A1B"
        title="Muhammad Ahmed Khan"
      />
      <People
        profileSrc="https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/58755107_661204617656443_2215424129337655296_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-_VPQ6L3OhwAX_V6iau&_nc_ht=scontent.fkhi22-1.fna&oh=9a2b8fdb37afb8d99e25ffd03adeded1&oe=6127551A"
        title="Muhammad Salman"
      />
      <People
        profileSrc="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/219500188_2395268900616477_2790467034487934487_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeE1nPqbM4AxSqa-e7cml94eeRbtnGryJdB5Fu2cavIl0FPfEVIltPBz1ZjZgYcrRbQz7W0aMgcvv045lAyCt5PC&_nc_ohc=93X95O0ab2oAX9vSDp0&_nc_ht=scontent.fkhi17-1.fna&oh=be2e9be10c3c3aa201ac332a71bd9533&oe=6138EA7B"
        title="Muhammad Zohaib"
      />
      <People
        profileSrc="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/79858263_2586716661414351_3802321752441225216_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeE4Jmzgs_GL4J1pmWVTBGrAc22k24W9TXRzbaTbhb1NdEFBrOQ_510TGoITC5-ZJvB2gH9szg_hRe9l4KiY1WCv&_nc_ohc=vcUr58KYZUgAX_bDHQR&tn=Z8j2uESF8xTsMzuw&_nc_ht=scontent.fkhi17-1.fna&oh=7c4dcb63aaa5018f72a961c3f4bbd0c7&oe=6138B3F9"
        title="Zeerick Steve"
      />
      <People
        profileSrc="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/169156813_1365840437148244_5018693759011699593_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeF3LADiGLSkTYEFZ0sde5wfhdd6eDyG0VSF13p4PIbRVCBXAO4iQ6EMYdParj2SWwsfdiw38b6BNqvpIPCoSpJa&_nc_ohc=nQ58bUmmfTEAX_ozfyF&_nc_ht=scontent.fkhi17-1.fna&oh=7cb16cbf90169171c407cc50c34ffcec&oe=61375F41"
        title="Sohail Aslam"
      />
      <People
        profileSrc="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/200853472_1042966539568386_7711824799753192769_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeGMGa2-sagmvn5w9y8IXggAoyehrsuI4rOjJ6Guy4jis1TQ8QXVXCfnq75z1Bs2xjUGJJYr7zsI1Fmz4LG1-ol9&_nc_ohc=fjBmIHGsVUgAX89uHyc&tn=Z8j2uESF8xTsMzuw&_nc_ht=scontent.fkhi17-1.fna&oh=b06240551b7cbef5a0fd0e3bb6c17815&oe=6137B217"
        title="Muneeb Saleem"
      />
      <People
        profileSrc="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/202507996_4106069782825114_3272740554989451402_n.jpg?_nc_cat=109&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeEOKwhARWmCsexgx4l_DR9Fw8zGfVD6hQDDzMZ9UPqFADwRHiUVx1QPS7ns6jgAjuCPi2prueyGI4B5kmjDkAIC&_nc_ohc=eocNtB5GdhkAX9eO4iL&_nc_ht=scontent.fkhi17-1.fna&oh=a8b7cfbd185e21e631b1fc2c763de694&oe=6136168E"
        title="Faiq Saeedi"
      />
      <People
        profileSrc="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/61791008_864975153855700_1931784334490992640_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeHuCFOCt1tCZLxx93R4sGaT9c7TcC8nTWj1ztNwLydNaCA4pTwufSQk2mFjRHUuIhy6I3roAoJJop2AqlGVhV5-&_nc_ohc=7KgYkD1HLXMAX9dAuv4&_nc_ht=scontent.fkhi17-1.fna&oh=b044ed10729672503b0d8dd6b6dc2053&oe=613712A4"
        title="Muhammad Muzammil"
      />
      <People
        profileSrc="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/186198524_1904733659676230_8220813108125972026_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeEX98wtXOfwZGHUyc_LOvkuTx30CaFTYlNPHfQJoVNiUzltmPUm-AVscZd8aflstE6joGATPGeiLJCsN9fRNlYs&_nc_ohc=xWrgYQ8k9b0AX8Tew95&_nc_ht=scontent.fkhi17-1.fna&oh=8ab71f3e6b21bbe5d40b954092477edb&oe=6138E640"
        title="Harris Qureshi"
      />
      <People
        profileSrc="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/161313469_5414957961877988_5755651056590688891_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeEGk4bp9w-s0rIQhBczrSPmB4f5IuOMHAAHh_ki44wcANMfUnDm5RXwrEQlfKQNx9dzBY1HB-QpNexKMF9Ijq-B&_nc_ohc=dGaNR13OQBIAX-pKsKr&_nc_ht=scontent.fkhi17-1.fna&oh=a2505a9877067bd123aab300818c3683&oe=613968E3"
        title="Arsalan Moin"
      />
      <People
        profileSrc="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/125472160_1579028188973108_2124387205966715548_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeE_wBfpvqL1hZ9p55OFnm4qlVtoIrF1TW-VW2gisXVNb_doudirWbD0R_sRkJ-j8gD2w44xm3XaP23QUlVxQ_Xf&_nc_ohc=V0YGZMfEINQAX-M9ieb&_nc_ht=scontent.fkhi17-1.fna&oh=f3f64d2e25f218658cba8f471269f389&oe=613758AC"
        title="Muhammad Umer Qadri"
      />
      <People
        profileSrc="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.18169-1/p200x200/16683830_118726865313548_2974915176937508821_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=7206a8&_nc_eui2=AeELy-WOYUpJ9_yXHHro1-Ok1MOX6YaDg7vUw5fphoODuzHJEqGUpPmYcRZJVefwgTPsFFzuLZapWFUH1m02Ku6G&_nc_ohc=76GZPPFM9IsAX9DUFdd&_nc_ht=scontent.fkhi17-1.fna&oh=eba1dfd9a10041c4bf7238fe92f22ee5&oe=6137BCDD"
        title="Khalid Qurashi"
      />
    </div>
  );
}

export default PeopleList;
