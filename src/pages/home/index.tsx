import { FC } from 'react';
import LogoIcon from '../../assets/icons/logo.svg';
import AirdropIcon from '../../assets/icons/delegation.svg';
import CosmosIcon from '../../assets/icons/cosmos.png';
import BlockIcon from '../../assets/icons/block.svg';
import EducationIcon from '../../assets/icons/education.svg';
import AlignmentIcon from '../../assets/icons/alignment.svg';
import TransparencyIcon from '../../assets/icons/transparency.svg';
import mainnetValidators from '../../data/mainnet.json';
import testnetValidators from '../../data/testnet.json';
import classNames from 'classnames';
import { Element } from 'react-scroll';
import { NavLink } from 'react-router-dom';

export const HomePage: FC<any> = (props) => {
  return (
    <div className='home'>
      <Element name='scroll-airdrop' />
      <section id='intro'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h1>Cosmos Airdrops</h1>
              <h2>Information about cosmos airdrops. Often updates!</h2>
              <p>
                With the huge amount of current and upcoming airdrops on the
                cosmos ecosystem it can be impossible to keep up with all the
                emerging information. Here you will find a compiled list of all
                currently claimable, upcoming, rumoured, and expired airdrops.
              </p>
            </div>
            <div className='col-lg-6 d-flex align-items-center'>
              <img src={AirdropIcon} className='img-fluid' />
              {/* <img src='assets/icons/process.svg' alt='' className='img-fluid' /> */}
            </div>
          </div>{' '}
          <NavLink to={'/airdrop'} className='btn btn-primary btn-lg'>
            Check Airdrops
          </NavLink>
        </div>
        <Element name='scroll-staking' />
      </section>

      <section id='about' style={{ paddingTop: 0 }}>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-6 order-2 order-lg-0'>
              <img src={CosmosIcon} width={400} height={300} className='d-inline-block align-top' />
            </div>
            <div className='col-lg-6 order-0 order-lg-2'>
              <h3>Staking on Cosmos Network made SIMPLE</h3>
              <p>
                Cosmos: The Internet of Blockchains!
                <br></br>Cosmos is an ever-expanding ecosystem of interoperable
                and sovereign blockchain apps and services, built for a
                decentralized future.
                <br></br>TC Network is a group of technical developers
                participating in #Cosmos blockchains, providing staking services,
                building dApps and supporting Cosmos projects.
              </p>
              <br></br>
              <a href='/stake' rel='noreferrer' className='btn btn-primary btn-lg'>Staking Now</a>
            </div>
          </div>
        </div>
      </section>

      <Element name='scroll-validator'>
        <section id='portfolio'>
          <div className='container'>
            <h3>Portfolio | Joined as the Validator!</h3>
            <div className='row'>
              {
                mainnetValidators.map((e: any, i) => {
                  var chainStatus = classNames({
                    'status-mainnet-active': e.status === 'active',
                    'status-mainnet-inactive': e.status === 'inactive',
                  });

                  return (
                    <div key={i} className='col-md-6 col-lg-6 col-xl-4'>
                      <a href={e.url} target='_blank' rel='noreferrer'>
                        <div className={`card ${e.name.length > 8 ? 'pr-0' : ''}`}>
                          {/* <div className='badge-corner-right' hidden>
                            <h5>
                              <span id='badge-apy-cosmos' className='badge badge-pill badge-success badge-font'>
                                APR -%
                              </span>
                            </h5>
                          </div>
                          <div className='badge-corner-left' hidden>
                            <h5>
                              <span id='badge-price-cosmos' className='badge badge-dark badge-font'>
                                $ -
                              </span>
                            </h5>
                          </div> */}
                          <div className='card-logo'>
                            <img height={90} width={90} src={require(`../../assets/validators/${e.logo}`)} alt='' />
                          </div>
                          <div className='card-body'>
                            <div className='card-title'>
                              {e.name}{' '}
                              <span className='dot has-tooltip' data-original-title='null'>
                                <svg
                                  data-v-21c5d077
                                  data-v-f322c9fc
                                  width={10}
                                  height={10}
                                  viewBox='0 0 8 8'
                                  fill='var(--dot-color, rgba(59, 66, 125, 0.12))'
                                  xmlns='http://www.w3.org/2000/svg'
                                  className={chainStatus}
                                >
                                  <circle data-v-21c5d077 cx={4} cy={4} r={4} />
                                </svg>
                              </span>
                            </div>
                            <div className='card-status'>
                              <div className='status-h'>APR: %</div>
                              <div className='uptime'>Uptime: {e.uptime}%</div>
                              <div className='status-h'>Commission: {e.commision}%</div>
                            </div>
                          </div>

                          <div className='staking'>
                            <p style={{ display: 'none' }} className='achieve' id='cosmos_token'>
                              <img src={require(`../../assets/icons/staked.png`)} alt='' />
                            </p>
                            <a className='boxed-btn' href={e.address} target="_blank">
                              Stake Now
                            </a>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })
              }
            </div>

            <div className='testnet'>Testnet</div>
            <div className='row'>
              {
                testnetValidators.map((e: any, i) => {
                  var chainStatus = classNames({
                    'status-testnet-active': e.status === 'active',
                    'status-testnet-inactive': e.status === 'inactive',
                  });

                  return (
                    <div key={i} className='col-md-6 col-lg-6 col-xl-4'>
                      <a href={e.url} target='_blank' rel='noreferrer'>
                        <div className={`card ${e.name.length > 8 ? 'pr-0' : ''}`}>
                          <div className='card-logo'>
                            <img height={90} width={90} src={require(`../../assets/validators/${e.logo}`)} alt='' />
                          </div>
                          <div className='card-body'>
                            <div className='card-title'>
                              {e.name}{' '}
                              <span className='dot has-tooltip' data-original-title='null'>
                                <svg
                                  data-v-21c5d077
                                  data-v-f322c9fc
                                  width={10}
                                  height={10}
                                  viewBox='0 0 8 8'
                                  fill='var(--dot-color, rgba(59, 66, 125, 0.12))'
                                  xmlns='http://www.w3.org/2000/svg'
                                  className={chainStatus}
                                >
                                  <circle data-v-21c5d077 cx={4} cy={4} r={4} />
                                </svg>
                              </span>
                            </div>
                            <div className='card-status'>
                              <div className='status-h'>APR: %</div>
                              <div className='uptime'>Uptime: {e.uptime}%</div>
                              <div className='status-h'>Commission: {e.commision}%</div>
                            </div>
                          </div>

                          <div className='staking'>

                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </section>
      </Element>

      <section id='reasons'>
        <div className='container'>
          <h3>Why you should stay with us!</h3>
          <div className='row'>
            <div className='col-reason col-md-6 col-lg-3'>
              <div className='r-icon'>
                <img height={90} width={97} src={AlignmentIcon} alt='' />
              </div>
              <h4>Contribution</h4>
              <p>
                We are dedicated to community development with non-profit purpose. Our revenue paid for apps/tools development and maintainence cost.
              </p>
            </div>
            <div className='col-reason pb-0 col-md-6 col-lg-3'>
              <div className='r-icon'>
                <img height={90} width={73} src={TransparencyIcon} alt='' />
              </div>
              <h4>Decentralize</h4>
              <p>
                Flat modeling and not under control in any groups or entities are our operational mechanisms, You-I We are creating added values for our community altogether
              </p>
            </div>
            <div className='col-reason pb-0 col-md-6 col-lg-3'>
              <div className='r-icon'>
                <img height={70} width={90} src={BlockIcon} alt='' />
              </div>
              <h4>Technology</h4>
              <p>
                Follow the rules of Cosmos network, providing staking service, building tools, validating cosmos chains, sharing and training those who are interested in is our desire
              </p>
            </div>
            <div className='col-reason pb-0 col-md-6 col-lg-3'>
              <div className='r-icon'>
                <img height={70} width={90} src={EducationIcon} alt='' />
              </div>
              <h4>Community</h4>
              <p>
                Build up a strong community where joint power is helping is mutual. Your asset is your choice in using it efficiently,
                we only provide informative and valuable tips to our community, will not encourage you to follow one or another.

              </p>
            </div>
          </div>
        </div>
        <Element name='scroll-about' />
      </section>

      <section id='about' style={{ paddingTop: 0 }}>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-6 order-2 order-lg-0'>
              <img
                src={LogoIcon}
                width={215}
                height={200}
                alt=''
                className='d-inline-block align-top'
              />
            </div>
            <div className='col-lg-6 order-0 order-lg-2'>
              <h3>About Us</h3>
              <p>
                We are a group of blockchain developers and enthusiasts who run
                nodes on Proof-of-Stake (PoS) blockchains. We're using the Cosmos
                Network Airdrop Program to collect and share the latest news from
                the Cosmos Network. We took care of all the technical setup so you
                could start staking your assets right away. We also help the
                Cosmos community by learning and building on the Cosmos SDK.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h3>Connect Us</h3>
              <p>
                Reach out to us if you have any questions or need help with
                delegation instructions.
              </p>
            </div>
            <div className='col-lg-6'>
              <div className='row justify-content-end mailbox'>
                <div className='col-lg-8'>
                  <a
                    href='https://t.me/tcnetwork_io'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button type='button' className='btn btn-primary btn-lg'>
                      Get in touch with us!
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
