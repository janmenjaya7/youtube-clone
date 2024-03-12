import React from "react";
// import img from "../add-video-icon.svg";
import {
  Bell,
  MicFill,
  Search,
  Youtube,
  Person,
  CameraReels,
  HouseDoorFill,
  Film,
  ChevronRight,
  ClockHistory,
  PersonSquare,
  Stopwatch,
  ChevronDown,
  CollectionPlay,
  Handbag,
  MusicNote,
  Broadcast,
  Controller,
  Newspaper,
  Trophy,
  Lightbulb,
  BroadcastPin,
  List,
  PersonStandingDress,
  Fire,
  HandThumbsUp,
  PlayBtn,
  PlayBtnFill,
  Play,
  Gear,
  Flag,
  QuestionCircle,
  ExclamationCircle,
} from "react-bootstrap-icons";

function Navbar() {
  return (
    <>
      <div id="navbar" className="fixed-top">
        <nav class="navbar navbar-light bg-dark d-flex align-items-center flex-wrap ps-4">
          <div className="d-flex align-items-center justify-content-between">
            <a class="side-menu-icon" href="#">
              <List color="#fff" size={30} />
            </a>
            <div className="ps-3">
              <Youtube color="red" size={40} />
              <span className="text-white text-capitalize nav-text">
                YouTube
              </span>
            </div>
          </div>
          <div className="serch-box-section">
            <div className="input-section">
              <input type="text" placeholder="Search" className="" />
              <button className="search-icon-btn">
                <Search color="#fff" size={20} />
              </button>
              <span className="mic-btn">
                <MicFill color="#fff" size={20} />
              </span>
            </div>
          </div>
          <div className="create-icon d-flex justify-content-center align-items-center">
            <span className="bell-btn">
              <CameraReels color="#fff" size={20} />
            </span>
            <span className="bell-btn">
              <Bell color="#fff" size={20} />
            </span>
            <span className="bell-btn">
              <Person color="#fff" size={20} />
            </span>
          </div>
        </nav>
      </div>
      <div
        id="side-nav"
        className="text-white bg-dark d-flex justify-content-start flex-column"
      >
        <div>
          <li className="side-icons home-active d-flex justify-content-start align-items-center">
            <span className="pe-2">
              <HouseDoorFill color="#fff" size={20} />
            </span>
            <div className="p-2">Home</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center ">
            <span className="pe-2">
              <Film color="#fff" size={20} />
            </span>
            <div className="p-2">Shorts</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <span className="pe-2">
              <CollectionPlay color="#fff" size={20} />
            </span>
            <div className="p-2">Subscriptions</div>
          </li>
          <hr color="#938b8b47" style={{ with: "100%" }} />
          <li className=" d-flex justify-content-start align-items-center">
            <div className="p-2">You</div>
            <span className="pe-2">
              <ChevronRight color="#fff" size={15} />
            </span>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <span className="pe-2">
              <PersonSquare color="#fff" size={20} />
            </span>
            <div className="p-2">Your channel</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <span className="pe-2">
              <ClockHistory color="#fff" size={20} />
            </span>
            <div className="p-2">History</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <span className="pe-2">
              <Stopwatch color="#fff" size={20} />
            </span>
            <div className="p-2">Watch later</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <span className="pe-2">
              <PlayBtn color="#fff" size={20} />
            </span>
            <div className="p-2">Your video</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <span className="pe-2">
              <HandThumbsUp color="#fff" size={20} />
            </span>
            <div className="p-2">Lick video</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <span className="pe-2">
              <ChevronDown color="#fff" size={20} />
            </span>
            <div className="p-2">Show more</div>
          </li>
          <hr color="#938b8b47" />
          <p className="d-flex justify-content-start ps-4">Subscriptions</p>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2 sub-icon">
              <ChevronDown color="#f8f7f7a0" size={20} />
            </div>
            <div className="p-2">e2ehiring</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2 sub-icon">
              <ChevronDown color="#f8f7f7a0" size={20} />
            </div>
            <div className="p-2">T series</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2 sub-icon">
              <ChevronDown color="#f8f7f7a0" size={20} />
            </div>
            <div className="p-2">Music</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2 sub-icon">
              <ChevronDown color="#f8f7f7a0" size={20} />
            </div>
            <div className="p-2">Movies</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2 sub-icon">
              <ChevronDown color="#f8f7f7a0" size={20} />
            </div>
            <div className="p-2">Entertainment</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2 sub-icon">
              <ChevronDown color="#f8f7f7a0" size={20} />
            </div>
            <div className="p-2">News</div>
          </li>
          <hr color="#938b8b47" />
          <p className="d-flex justify-content-start ps-4">Explore</p>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2">
              <Fire color="#fff" size={20} />
            </div>
            <div className="p-2">Trending</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2">
              <Handbag color="#fff" size={20} />
            </div>
            <div className="p-2">Shopping</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2">
              <MusicNote color="#fff" size={20} />
            </div>
            <div className="p-2">Music</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2 ">
              <Film color="#fff" size={20} />
            </div>
            <div className="p-2">Movies</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2">
              <Broadcast color="#fff" size={20} />
            </div>
            <div className="p-2">Live</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2">
              <Controller color="#fff" size={20} />
            </div>
            <div className="p-2">Gaming</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2">
              <Newspaper color="#fff" size={20} />
            </div>
            <div className="p-2">News</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2">
              <Trophy color="#fff" size={20} />
            </div>
            <div className="p-2">Sports</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2">
              <Lightbulb color="#fff" size={20} />
            </div>
            <div className="p-2">Lerning</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2">
              <PersonStandingDress color="#fff" size={20} />
            </div>
            <div className="p-2">Fashion & Beauty</div>
          </li>
          <li className="side-icons d-flex justify-content-start align-items-center">
            <div className="pe-2">
              <BroadcastPin color="#fff" size={20} />
            </div>
            <div className="p-2">Podcasts</div>
          </li>
        </div>
        <hr color="#938b8b47" />
        <p className="d-flex justify-content-start ps-4">More from YouTube</p>
        <li className="side-icons d-flex justify-content-start align-items-center">
          <div className="pe-2 more-icons">
            <PlayBtnFill color="#fff" size={20} />
          </div>
          <div className="p-2">YouTube studio</div>
        </li>
        <li className="side-icons d-flex justify-content-start align-items-center">
          <div className="pe-2 more-icons">
            <Play color="#fff" size={20} />
          </div>
          <div className="p-2">YouTube Music</div>
        </li>
        <li className="side-icons d-flex justify-content-start align-items-center">
          <div className="pe-2 more-icons">
            <PlayBtn color="#fff" size={20} />
          </div>
          <div className="p-2">YouTube Kids</div>
        </li>
        <hr color="#938b8b47" />
        <li className="side-icons d-flex justify-content-start align-items-center">
          <div className="pe-2">
            <Gear color="#fff" size={20} />
          </div>
          <div className="p-2">Settings</div>
        </li>
        <li className="side-icons d-flex justify-content-start align-items-center">
          <div className="pe-2">
            <Flag color="#fff" size={20} />
          </div>
          <div className="p-2">Report history</div>
        </li>
        <li className="side-icons d-flex justify-content-start align-items-center">
          <div className="pe-2">
            <QuestionCircle color="#fff" size={20} />
          </div>
          <div className="p-2">Help</div>
        </li>
        <li className="side-icons d-flex justify-content-start align-items-center">
          <div className="pe-2">
            <ExclamationCircle color="#fff" size={20} />
          </div>
          <div className="p-2">Send feedback</div>
        </li>
        <hr color="#938b8b47" />
        <div className="footer-nav d-flex justify-content-start align-items-center col-3">
          <div className="nav-paragrap text-wrap">
            <p>AboutPressCopyrightContact usCreatorsAdvertiseDevelopers</p>
            <p className="my-2">
              TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
            </p>
            <p>© 2024 Google LLC</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
