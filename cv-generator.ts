import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TabStopPosition,
  TabStopType,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  TableAnchorType,
  RelativeHorizontalPosition,
  RelativeVerticalPosition,
  OverlapType,
  BorderStyle,
  ImageRun,
  PageBorders,
  HeightRule,
  PageSizeAttributes
} from 'docx';
import { PageMargin } from 'docx/build/file/document/body/section-properties/page-margin/page-margin';
function dateRemoveDay(date) {
  let dates = date.split('/');
  return dates[1] + '/' + dates[2];
}

export class DocumentCreator {
  // tslint:disable-next-line: typedef
  public create([
    providers,
    apprentice,
    profReg,
    workExperience,
    profile
  ]): Document {
    console.log(workExperience);
    const document = new Document({
      styles: {
        default: {
          heading1: {
            run: {
              font: 'Raleway',
              size: 33,
              bold: false,
              color: '#313844'
            }
          },
          heading2: {
            run: {
              font: 'Raleway',
              size: 20,
              bold: true,
              color: '#32afb2'
            }
          },
          heading3: {
            run: {
              font: 'Raleway',
              size: 20,
              bold: true,
              color: '#555e70'
            }
          },
          title: {
            run: {
              font: 'Raleway',
              size: 35,
              bold: true,
              color: '#32afb2'
            }
          },
          heading4: {
            run: {
              color: '#555e70',
              font: 'Raleway',
              size: 18
            }
          },
          listParagraph: {
            run: {
              color: '#555e70',
              font: 'Raleway',
              size: 18
            }
          }
        }
      },
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }
            }
          },

          children: [
            new Table({
              float: {
                horizontalAnchor: TableAnchorType.PAGE,
                verticalAnchor: TableAnchorType.PAGE,
                relativeHorizontalPosition: RelativeHorizontalPosition.LEFT,
                relativeVerticalPosition: RelativeVerticalPosition.TOP,
                overlap: OverlapType.NEVER,
                leftFromText: 50,
                rightFromText: 50,
                topFromText: 50,
                bottomFromText: 30
              },
              width: {
                size: 11900,
                type: WidthType.DXA
              },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      width: {
                        size: 35,
                        type: WidthType.PERCENTAGE
                      },
                      margins: {
                        top: 400,
                        bottom: 200,
                        left: 400,
                        right: 200
                      },
                      borders: {
                        top: {
                          style: BorderStyle.NONE,
                          size: 0,
                          color: 'ffffff'
                        },
                        bottom: {
                          style: BorderStyle.NONE,
                          size: 0,
                          color: 'ffffff'
                        },
                        left: {
                          style: BorderStyle.NONE,
                          size: 0,
                          color: 'ffffff'
                        },
                        right: {
                          style: BorderStyle.NONE,
                          size: 0,
                          color: 'ffffff'
                        }
                      },
                      children: [
                        new ImageRun({
                          data: [''],
                          transformation: {
                            width: 500,
                            height: 500
                          }
                        }),
                        this.createPreHeading(),
                        this.createHeading('Get in touch!'),
                        this.createContactDetails(
                          profile.PHONE_NUMBER,
                          'Mobile'
                        ),
                        this.createContactDetails(profile.EMAIL, 'Email'),
                        this.createContactDetails(
                          profile.PROFILE_URL,
                          'LinkedIn'
                        ),
                        this.createContactDetails(profile.ADDRESS, 'Address'),
                        this.createPreHeading(),
                        this.createHeading('Skills'),
                        ...profile.SKILLS.map(skill => {
                          const arr: Paragraph[] = [];
                          arr.push(this.createBullet(`${skill}`));
                          return arr;
                        }).reduce((prev, curr) => prev.concat(curr), []),
                        this.createPreHeading(),
                        this.createHeading('Hobbies and interests'),
                        ...profile.HOBBIES.map(hobbys => {
                          const arr: Paragraph[] = [];
                          arr.push(
                            this.createInstitutionHeader(hobbys.name),
                            this.createBullet(`${hobbys.description}`)
                          );

                          return arr;
                        }).reduce((prev, curr) => prev.concat(curr), [])
                      ]
                    }),
                    new TableCell({
                      width: {
                        size: 65,
                        type: WidthType.PERCENTAGE
                      },
                      borders: {
                        top: {
                          style: BorderStyle.NONE,
                          size: 0,
                          color: 'ffffff'
                        },
                        bottom: {
                          style: BorderStyle.NONE,
                          size: 0,
                          color: 'ffffff'
                        },
                        left: {
                          style: BorderStyle.NONE,
                          size: 0,
                          color: 'ffffff'
                        },
                        right: {
                          style: BorderStyle.NONE,
                          size: 0,
                          color: 'ffffff'
                        }
                      },
                      margins: {
                        top: 500,
                        bottom: 500,
                        left: 500,
                        right: 500
                      },
                      children: [
                        new Paragraph({
                          text: profile.NAME,
                          heading: HeadingLevel.TITLE
                        }),
                        new Paragraph({
                          text: profile.PERSONAL_STATEMENT,
                          heading: HeadingLevel.HEADING_4
                        }),
                        this.createPreHeading(),
                        this.createHeading('Work Experience'),
                        ...workExperience
                          .map(work => {
                            const arr: Paragraph[] = [];
                            arr.push(
                              this.createInstitutionHeader(work.Employer)
                            );
                            for (const job of work.jobs) {
                              arr.push(
                                this.createRoleText(
                                  `${job.name} : ${
                                    job.personalJobTitle
                                  } (${dateRemoveDay(
                                    job.startDate
                                  )} - ${dateRemoveDay(job.endDate)})`
                                ),
                                this.createExperienceText(`${job.description}`)
                              );
                            }
                            return arr;
                          })
                          .reduce((prev, curr) => prev.concat(curr), []),
                        this.createPreHeading(),
                        this.createHeading('Aprrenticeships'),
                        ...apprentice
                          .map(qual => {
                            const arr: Paragraph[] = [];
                            if (
                              dateRemoveDay(qual.startDate) ==
                              dateRemoveDay(qual.endDate)
                            ) {
                              arr.push(
                                this.createInstitutionHeader(
                                  `${qual.name} (${dateRemoveDay(
                                    qual.startDate
                                  )})`
                                )
                              );
                            } else {
                              arr.push(
                                this.createInstitutionHeader(
                                  `${qual.name} (${dateRemoveDay(
                                    qual.startDate
                                  )} - ${dateRemoveDay(qual.endDate)})`
                                )
                              );
                            }

                            arr.push(
                              this.createRoleText(
                                `Employed by ${qual.Employer}`
                              ),
                              this.createExperienceText(`${qual.description}`)
                            );
                            return arr;
                          })
                          .reduce((prev, curr) => prev.concat(curr), []),
                        this.createPreHeading(),
                        this.createHeading('Professional Registrations'),
                        ...profReg
                          .map(registrations => {
                            const arr: Paragraph[] = [];
                            if (
                              dateRemoveDay(registrations.startDate) ==
                              dateRemoveDay(registrations.endDate)
                            ) {
                              arr.push(
                                this.createRoleText(
                                  `${registrations.name}  (${dateRemoveDay(
                                    registrations.startDate
                                  )})`
                                )
                              );
                            } else {
                              arr.push(
                                this.createRoleText(
                                  `${registrations.name}  (${dateRemoveDay(
                                    registrations.startDate
                                  )} - ${dateRemoveDay(registrations.endDate)})`
                                )
                              );
                            }
                            return arr;
                          })
                          .reduce((prev, curr) => prev.concat(curr), []),
                        this.createPreHeading(),
                        this.createHeading('Education'),
                        ...providers
                          .map(provider => {
                            const arr: Paragraph[] = [];
                            arr.push(
                              this.createInstitutionHeader(provider.name)
                            );
                            for (const dates of provider.dates) {
                              arr.push(
                                this.createRoleText(
                                  `${dates.startDate} - ${dates.endDate} :`
                                )
                              );
                              for (let qual of dates.qualifications) {
                                arr.push(
                                  this.createBullet(
                                    `${qual.name}: Grade - ${qual.grade}`
                                  )
                                );
                              }
                            }
                            return arr;
                          })
                          .reduce((prev, curr) => prev.concat(curr), [])
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }
      ]
    });
    return document;
  }

  public createContactInfo(profile): Paragraph {
    return new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun(
          `Mobile: ${profile.PHONE_NUMBER} | LinkedIn: ${
            profile.PROFILE_URL
          } | Email: ${profile.EMAIL}`
        ),
        new TextRun({
          text: `Address: ${profile.ADDRESS}`,
          break: 1
        })
      ]
    });
  }

  public createPreHeading(): Paragraph {
    return new Paragraph({
      text: '',
      thematicBreak: true,
      spacing: {
        after: 200
      }
    });
  }
  public createHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_1,
      spacing: {
        after: 100
      }
    });
  }

  public createSubHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_2
    });
  }

  public createInstitutionHeader(
    institutionName: string
    // dateText: string
  ): Paragraph {
    return new Paragraph({
      text: institutionName,
      heading: HeadingLevel.HEADING_2
    });
  }
  public createRoleText(roleText: string): Paragraph {
    return new Paragraph({
      text: roleText,
      heading: HeadingLevel.HEADING_3
    });
  }

  public createBullet(text: string): Paragraph {
    return new Paragraph({
      text: text,
      bullet: {
        level: 0
      }
    });
  }
  public createExperienceText(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_4,
      indent: {
        start: 300
      },
      spacing: {
        after: 50
      }
    });
  }
  public splitParagraphIntoBullets(text: string): string[] {
    return text.split('\n\n');
  }

  public createSkillsList(skills) {
    const arr: Paragraph[] = [];
    for (const skill of skills) {
      arr.push(this.createBullet(skill));
    }
    console.log(arr);
    return arr;
  }

  public createContactDetails(detail, type) {
    return new Paragraph({
      children: [
        new TextRun({
          text: type + ':',
          size: 20,
          font: 'Raleway',
          color: '#32afb2',
          bold: true,
          break: 1
        }),
        new TextRun({
          text: detail,
          size: 18,
          font: 'Raleway',
          break: 1
        })
      ]
    });
  }

  public createOpusHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_1
    });
  }
}
