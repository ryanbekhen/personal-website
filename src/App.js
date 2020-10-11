import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import exepertise from './expertise.json';
import experience from './experience.json';
import education from './education.json';
import skill from './skill.json';
import SectionHeader from './components/SectionHeader';
import SectionGeneralOne from './components/SectionGeneralOne';
import SectionContentText from './components/SectionContentText';
import SectionGeneralTwo from './components/SectionGeneralTwo';
import SectionContentList from './components/SectionContentList';
import SectionContentSkill from './components/SectionContentSkill';
import SectionContentTimeline from './components/SectionContentTimeline';
import SectionContentAwards from './components/SectionContentAwards';
import SectionFooter from './components/SectionFooter';

class App extends Component {
  render() {
    return (
      <div>
        <SectionHeader />

        <SectionGeneralOne title={"Intro"} subtitle={"Mengenal saya"}>
          <SectionContentText>
            {"Software Developer dengan pengalaman 2 tahun di perusahaan IT Konsultan dan 4 tahun sebagai Freelancer."}
            {"Menguasai beberapa bahasa pemrograman, teknologi/framework terbaru, dan cepat dalam menguasai bahasa/framework baru selama bahasa pemrograman turunan C/C++ (C/C++ family)."}
            {"Mudah berkomunikasi dan dapat bekerja sama dalam tim."}
          </SectionContentText>
        </SectionGeneralOne>

        <SectionGeneralTwo title={"Expertise"} subtitle={"Keahlian"}>
          <SectionContentList data={exepertise} />
        </SectionGeneralTwo>

        <SectionGeneralOne title={"Skills"} subtitle={"Keterampilanku Developer"}>
          <SectionContentSkill data={skill} />
        </SectionGeneralOne>

        <SectionGeneralTwo title={"Experience"} subtitle={"Banyak hal yang ku lalui"}>
          <SectionContentTimeline data={experience} />
        </SectionGeneralTwo>

        <SectionGeneralOne title={"Education"} subtitle={"Pendidikan"}>
          <SectionContentTimeline data={education} />
        </SectionGeneralOne>

        <SectionGeneralTwo title={"Awards"} subtitle={"Saat-saat bahagia!"}>
          <SectionContentAwards />
        </SectionGeneralTwo>

        <SectionGeneralOne title={"Contact"} subtitle={"Hubungi saya, mungkin."}>
          <SectionFooter />
        </SectionGeneralOne>
      </div>
    );
  }
}

export default App;
